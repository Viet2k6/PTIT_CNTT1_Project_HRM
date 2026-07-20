package com.example.humanresourcemanagement.entity;
import jakarta.persistence.*;
import lombok.Data;
@Data
@Entity
@Table(name = "salaries")
public class Salary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;
    
    private int month;
    private int year;
    private double baseSalary;
    private double bonus;
    private double deduction;
    private double totalSalary;
}
