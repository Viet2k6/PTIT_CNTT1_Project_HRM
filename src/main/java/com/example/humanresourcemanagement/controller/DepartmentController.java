package com.example.humanresourcemanagement.controller;
import com.example.humanresourcemanagement.entity.Department;
import com.example.humanresourcemanagement.repository.DepartmentRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/departments")
public class DepartmentController {
    private final DepartmentRepository repository;
    public DepartmentController(DepartmentRepository repository) { this.repository = repository; }
    
    @GetMapping
    public List<Department> getAll() { return repository.findAll(); }
    
    @PostMapping
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public Department create(@RequestBody Department dept) { return repository.save(dept); }
    
    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public Department update(@PathVariable Integer id, @RequestBody Department dept) {
        dept.setId(id);
        return repository.save(dept);
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public void delete(@PathVariable Integer id) { repository.deleteById(id); }
}
