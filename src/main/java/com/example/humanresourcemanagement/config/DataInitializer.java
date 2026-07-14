package com.example.humanresourcemanagement.config;
import com.example.humanresourcemanagement.entity.Employee;
import com.example.humanresourcemanagement.repository.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {
    private final EmployeeRepository repository;
    private final PasswordEncoder encoder;
    public DataInitializer(EmployeeRepository repository, PasswordEncoder encoder) {
        this.repository = repository;
        this.encoder = encoder;
    }
    @Override
    public void run(String... args) {
        repository.findByEmail("admin@gmail.com").ifPresent(admin -> {
            admin.setPassword(encoder.encode("123456"));
            repository.save(admin);
            System.out.println(">>> ĐÃ RESET MẬT KHẨU CỦA admin@gmail.com THÀNH 123456 <<<");
        });
        repository.findByEmail("a123@gmail.com").ifPresent(emp -> {
            emp.setPassword(encoder.encode("123456"));
            repository.save(emp);
            System.out.println(">>> ĐÃ RESET MẬT KHẨU CỦA a123@gmail.com THÀNH 123456 <<<");
        });
    }
}
