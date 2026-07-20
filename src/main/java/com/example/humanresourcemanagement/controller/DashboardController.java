package com.example.humanresourcemanagement.controller;
import com.example.humanresourcemanagement.repository.DepartmentRepository;
import com.example.humanresourcemanagement.repository.EmployeeRepository;
import com.example.humanresourcemanagement.repository.LeaveRequestRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {
    private final EmployeeRepository empRepo;
    private final DepartmentRepository deptRepo;
    private final LeaveRequestRepository leaveRepo;
    public DashboardController(EmployeeRepository empRepo, DepartmentRepository deptRepo, LeaveRequestRepository leaveRepo) {
        this.empRepo = empRepo;
        this.deptRepo = deptRepo;
        this.leaveRepo = leaveRepo;
    }
    @GetMapping("/stats")
    public Map<String, Object> getStats() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalEmployees", empRepo.count());
        stats.put("totalDepartments", deptRepo.count());
        stats.put("pendingLeaves", leaveRepo.findAll().stream().filter(l -> "PENDING".equals(l.getStatus())).count());
        return stats;
    }
    @GetMapping("/charts")
    public List<Map<String, Object>> getChartData() {
        return deptRepo.findAll().stream().map(dept -> {
            Map<String, Object> map = new HashMap<>();
            map.put("name", dept.getName());
            map.put("value", empRepo.findAll().stream().filter(e -> e.getDepartment() != null && e.getDepartment().getId().equals(dept.getId())).count());
            return map;
        }).collect(Collectors.toList());
    }
}
