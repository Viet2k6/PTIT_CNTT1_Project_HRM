package com.example.humanresourcemanagement.controller;
import com.example.humanresourcemanagement.entity.Employee;
import com.example.humanresourcemanagement.repository.EmployeeRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.List;
import java.util.Map;
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    private final EmployeeRepository repository;
    private final PasswordEncoder passwordEncoder;
    public EmployeeController(EmployeeRepository repository, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }
    
    @GetMapping("/me")
    public Employee getMyProfile(Principal principal) {
        return repository.findByEmail(principal.getName()).orElseThrow();
    }
    
    @PutMapping("/me/password")
    public void changePassword(@RequestBody Map<String, String> payload, Principal principal) {
        Employee emp = repository.findByEmail(principal.getName()).orElseThrow();
        if(!passwordEncoder.matches(payload.get("oldPassword"), emp.getPassword())) {
            throw new RuntimeException("Mật khẩu cũ không chính xác!");
        }
        emp.setPassword(passwordEncoder.encode(payload.get("newPassword")));
        repository.save(emp);
    }
    
    @GetMapping
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<Employee> getAll() { return repository.findAll(); }
    
    @PostMapping
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public Employee create(@RequestBody Employee emp) {
        emp.setPassword(passwordEncoder.encode(emp.getPassword()));
        return repository.save(emp);
    }
    
    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public Employee update(@PathVariable Integer id, @RequestBody Employee emp) {
        Employee existing = repository.findById(id).orElseThrow();
        emp.setId(id);
        if(emp.getPassword() == null || emp.getPassword().isEmpty()) {
            emp.setPassword(existing.getPassword());
        } else {
            emp.setPassword(passwordEncoder.encode(emp.getPassword()));
        }
        return repository.save(emp);
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public void delete(@PathVariable Integer id) { 
        Employee emp = repository.findById(id).orElseThrow();
        emp.setStatus(com.example.humanresourcemanagement.entity.Status.INACTIVE);
        repository.save(emp);
    }
}
