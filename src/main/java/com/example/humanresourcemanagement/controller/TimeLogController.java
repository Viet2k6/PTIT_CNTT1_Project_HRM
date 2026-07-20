package com.example.humanresourcemanagement.controller;
import com.example.humanresourcemanagement.entity.Employee;
import com.example.humanresourcemanagement.entity.TimeLog;
import com.example.humanresourcemanagement.repository.EmployeeRepository;
import com.example.humanresourcemanagement.repository.TimeLogRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("/api/attendance")
public class TimeLogController {
    private final TimeLogRepository timeLogRepository;
    private final EmployeeRepository employeeRepository;
    
    public TimeLogController(TimeLogRepository timeLogRepository, EmployeeRepository employeeRepository) {
        this.timeLogRepository = timeLogRepository;
        this.employeeRepository = employeeRepository;
    }
    
    private static final double COMPANY_LAT = 21.028511; // Hồ Gươm
    private static final double COMPANY_LNG = 105.854165;
    private static final double MAX_DISTANCE = 500.0; // 500 mét

    private double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
        double R = 6371000;
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);
        double a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                   Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2)) *
                   Math.sin(dLon/2) * Math.sin(dLon/2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    @PostMapping("/check-in")
    public TimeLog checkIn(@RequestParam(required = false) Double lat, @RequestParam(required = false) Double lng, Principal principal) {
        if (lat == null || lng == null) {
            throw new RuntimeException("Không lấy được vị trí GPS!");
        }
        if (calculateDistance(lat, lng, COMPANY_LAT, COMPANY_LNG) > MAX_DISTANCE) {
            throw new RuntimeException("Bạn đang ở quá xa công ty (vượt quá 500m)!");
        }
        
        Employee emp = employeeRepository.findByEmail(principal.getName()).orElseThrow();
        LocalDate today = LocalDate.now();
        
        TimeLog log = timeLogRepository.findByEmployeeIdAndWorkDate(emp.getId(), today)
                .orElse(new TimeLog());
                
        if (log.getCheckInTime() != null) throw new RuntimeException("Đã Check-in hôm nay rồi!");
        
        log.setEmployee(emp);
        log.setWorkDate(today);
        log.setCheckInTime(LocalDateTime.now());
        
        // Logic tính đi muộn (Sau 8h30 sáng)
        if(LocalTime.now().isAfter(LocalTime.of(8, 30))) {
            log.setStatus("LATE");
        } else {
            log.setStatus("ON_TIME");
        }
        return timeLogRepository.save(log);
    }
    
    @PostMapping("/check-out")
    public TimeLog checkOut(Principal principal) {
        Employee emp = employeeRepository.findByEmail(principal.getName()).orElseThrow();
        LocalDate today = LocalDate.now();
        
        TimeLog log = timeLogRepository.findByEmployeeIdAndWorkDate(emp.getId(), today)
                .orElseThrow(() -> new RuntimeException("Bạn chưa Check-in!"));
                
        log.setCheckOutTime(LocalDateTime.now());
        return timeLogRepository.save(log);
    }
    
    @GetMapping("/my-logs")
    public List<TimeLog> getMyLogs(Principal principal) {
        Employee emp = employeeRepository.findByEmail(principal.getName()).orElseThrow();
        return timeLogRepository.findByEmployeeId(emp.getId());
    }
    
    @GetMapping("/all")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<TimeLog> getAllLogs() {
        return timeLogRepository.findAll();
    }
}
