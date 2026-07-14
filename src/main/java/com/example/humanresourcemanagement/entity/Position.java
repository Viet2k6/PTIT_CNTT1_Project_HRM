package com.example.humanresourcemanagement.entity;
import jakarta.persistence.*;
import lombok.Data;
@Data
@Entity
@Table(name = "positions")
public class Position {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
}
