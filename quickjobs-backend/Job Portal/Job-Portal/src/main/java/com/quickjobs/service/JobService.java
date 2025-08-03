package com.quickjobs.service;

import com.quickjobs.dto.ApplicantDTO;
import com.quickjobs.dto.Application;
import com.quickjobs.dto.JobDTO;
import com.quickjobs.dto.ProfileDTO;
import com.quickjobs.exception.JobPortalException;
import jakarta.validation.Valid;

import java.util.List;

public interface JobService {

    public JobDTO postJob(JobDTO jobDTO) throws JobPortalException;

    public List<JobDTO> getAllJobs();

    public JobDTO getJob(Long id) throws JobPortalException;

    public void applyJob(Long id, @Valid ApplicantDTO applicantDTO) throws JobPortalException;

    public List<JobDTO> getJobsPostedBy(Long id);

    public void changeAppStatus(Application application) throws JobPortalException;
}
