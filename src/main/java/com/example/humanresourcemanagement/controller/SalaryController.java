package com.example.humanresourcemanagement.controller;
import com.example.humanresourcemanagement.entity.Employee;
import com.example.humanresourcemanagement.entity.Salary;
import com.example.humanresourcemanagement.repository.EmployeeRepository;
import com.example.humanresourcemanagement.repository.SalaryRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.List;
@RestController
@RequestMapping("/api/salaries")
public class SalaryController {
    private final SalaryRepository salaryRepository;
    private final EmployeeRepository employeeRepository;
    public SalaryController(SalaryRepository salaryRepository, EmployeeRepository employeeRepository) {
        this.salaryRepository = salaryRepository;
        this.employeeRepository = employeeRepository;
    }
    
    @PostMapping("/generate")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public String generateSalary(@RequestParam int month, @RequestParam int year) {
        List<Employee> employees = employeeRepository.findAll();
        for (Employee emp : employees) {
            if ("INACTIVE".equals(emp.getStatus().name())) continue;
            Salary salary = salaryRepository.findByEmployeeIdAndMonthAndYear(emp.getId(), month, year)
                    .orElse(new Salary());
            salary.setEmployee(emp);
            salary.setMonth(month);
            salary.setYear(year);
            salary.setBaseSalary(15000000.0);
            salary.setBonus(500000.0);
            salary.setDeduction(0.0);
            salary.setTotalSalary(salary.getBaseSalary() + salary.getBonus() - salary.getDeduction());
            salaryRepository.save(salary);
        }
        return "Tính lương thành công";
    }
    
    @GetMapping("/my-salaries")
    public List<Salary> getMySalaries(Principal principal) {
        Employee emp = employeeRepository.findByEmail(principal.getName()).orElseThrow();
        return salaryRepository.findByEmployeeId(emp.getId());
    }
    
    @GetMapping("/all")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<Salary> getAll() {
        return salaryRepository.findAll();
    }
}
