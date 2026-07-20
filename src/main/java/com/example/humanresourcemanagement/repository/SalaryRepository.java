package com.example.humanresourcemanagement.repository;
import com.example.humanresourcemanagement.entity.Salary;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
public interface SalaryRepository extends JpaRepository<Salary, Integer> {
    List<Salary> findByEmployeeId(Integer employeeId);
    Optional<Salary> findByEmployeeIdAndMonthAndYear(Integer employeeId, int month, int year);
}
