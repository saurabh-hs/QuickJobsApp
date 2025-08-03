package com.quickjobs.entity;

import com.quickjobs.dto.ApplicantDTO;
import com.quickjobs.dto.ApplicationStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Base64;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Applicant {
    private Long applicationId;
    private String name;
    private String email;
    private Long phone;
    private String website;
    private byte[] resume;
    private String coverLetter;
    private LocalDateTime timestamp;
    private ApplicationStatus applicationStatus;
    private LocalDateTime interviewTime;

    public ApplicantDTO toDTO() {
        return new ApplicantDTO(this.applicationId, this.name, this.email, this.phone, this.website, this.resume!=null?
                Base64.getEncoder().encodeToString(this.resume):null,
                this.coverLetter, this.timestamp, this.applicationStatus, this.interviewTime);
    }
}