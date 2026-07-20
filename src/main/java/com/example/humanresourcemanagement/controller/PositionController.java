package com.example.humanresourcemanagement.controller;
import com.example.humanresourcemanagement.entity.Position;
import com.example.humanresourcemanagement.repository.PositionRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/positions")
public class PositionController {
    private final PositionRepository repository;
    public PositionController(PositionRepository repository) { this.repository = repository; }
    
    @GetMapping
    public List<Position> getAll() { return repository.findAll(); }
    
    @PostMapping
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public Position create(@RequestBody Position pos) { return repository.save(pos); }
    
    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public Position update(@PathVariable Integer id, @RequestBody Position pos) {
        pos.setId(id);
        return repository.save(pos);
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public void delete(@PathVariable Integer id) { repository.deleteById(id); }
}
