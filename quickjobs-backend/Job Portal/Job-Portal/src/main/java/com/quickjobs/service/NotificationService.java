package com.quickjobs.service;

import com.quickjobs.dto.NotificationDTO;
import com.quickjobs.entity.Notification;
import com.quickjobs.exception.JobPortalException;

import java.util.List;

public interface NotificationService {
    public void sendNotification(NotificationDTO notificationDTO) throws JobPortalException;
    public List<Notification> getUnreadNotifications(Long userId);
    public void readNotification(Long id) throws JobPortalException;
}
