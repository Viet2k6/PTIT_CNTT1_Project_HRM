package com.example.humanresourcemanagement.repository;
import com.example.humanresourcemanagement.entity.TimeLog;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface TimeLogRepository extends JpaRepository<TimeLog, Integer> {
    Optional<TimeLog> findByEmployeeIdAndWorkDate(Integer employeeId, LocalDate date);
    List<TimeLog> findByEmployeeId(Integer employeeId);
}
