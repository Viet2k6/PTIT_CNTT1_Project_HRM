package com.example.humanresourcemanagement.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
@Data
@AllArgsConstructor
public class JwtAuthResponse {
    private String accessToken;
    private String tokenType = "Bearer";
    private String fullName;
    private String role;
    public JwtAuthResponse(String accessToken, String fullName, String role) {
        this.accessToken = accessToken;
        this.fullName = fullName;
        this.role = role;
    }
}
