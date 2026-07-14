package com.example.humanresourcemanagement.controller;
import com.example.humanresourcemanagement.dto.JwtAuthResponse;
import com.example.humanresourcemanagement.dto.LoginRequest;
import com.example.humanresourcemanagement.entity.Employee;
import com.example.humanresourcemanagement.repository.EmployeeRepository;
import com.example.humanresourcemanagement.security.JwtTokenProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;
    private final EmployeeRepository employeeRepository;
    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider tokenProvider, EmployeeRepository employeeRepository) {
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
        this.employeeRepository = employeeRepository;
    }
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = tokenProvider.generateToken(authentication);
            
            Employee emp = employeeRepository.findByEmail(loginRequest.getEmail()).orElseThrow();
            return ResponseEntity.ok(new JwtAuthResponse(jwt, emp.getFullName(), emp.getRole().name()));
        } catch (org.springframework.security.core.AuthenticationException e) {
            return ResponseEntity.status(401).body(java.util.Map.of("message", "Sai tài khoản hoặc mật khẩu (Báo từ Backend)"));
        }
    }
}
