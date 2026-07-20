package com.example.humanresourcemanagement.controller;
import com.example.humanresourcemanagement.entity.Employee;
import com.example.humanresourcemanagement.entity.LeaveRequest;
import com.example.humanresourcemanagement.repository.EmployeeRepository;
import com.example.humanresourcemanagement.repository.LeaveRequestRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/leaves")
public class LeaveRequestController {
    private final LeaveRequestRepository leaveRepository;
    private final EmployeeRepository employeeRepository;
    
    public LeaveRequestController(LeaveRequestRepository leaveRepository, EmployeeRepository employeeRepository) {
        this.leaveRepository = leaveRepository;
        this.employeeRepository = employeeRepository;
    }
    
    @PostMapping("/apply")
    public LeaveRequest apply(@RequestBody LeaveRequest request, Principal principal) {
        Employee emp = employeeRepository.findByEmail(principal.getName()).orElseThrow();
        request.setEmployee(emp);
        request.setStatus("PENDING");
        return leaveRepository.save(request);
    }
    
    @GetMapping("/my-requests")
    public List<LeaveRequest> getMyRequests(Principal principal) {
        Employee emp = employeeRepository.findByEmail(principal.getName()).orElseThrow();
        return leaveRepository.findByEmployeeId(emp.getId());
    }
    
    @GetMapping("/all")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<LeaveRequest> getAll() {
        return leaveRepository.findAll();
    }
    
    @PutMapping("/{id}/approve")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public LeaveRequest approve(@PathVariable Integer id) {
        LeaveRequest req = leaveRepository.findById(id).orElseThrow();
        req.setStatus("APPROVED");
        return leaveRepository.save(req);
    }
    
    @PutMapping("/{id}/reject")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public LeaveRequest reject(@PathVariable Integer id) {
        LeaveRequest req = leaveRepository.findById(id).orElseThrow();
        req.setStatus("REJECTED");
        return leaveRepository.save(req);
    }
}
