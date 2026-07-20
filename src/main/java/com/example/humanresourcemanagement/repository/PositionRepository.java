package com.example.humanresourcemanagement.repository;
import com.example.humanresourcemanagement.entity.Position;
import org.springframework.data.jpa.repository.JpaRepository;
public interface PositionRepository extends JpaRepository<Position, Integer> {
}
