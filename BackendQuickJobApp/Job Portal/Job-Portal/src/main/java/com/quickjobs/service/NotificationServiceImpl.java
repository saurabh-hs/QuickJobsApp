package com.quickjobs.service;

import com.quickjobs.dto.NotificationDTO;
import com.quickjobs.dto.NotificationStatus;
import com.quickjobs.entity.Notification;
import com.quickjobs.exception.JobPortalException;
import com.quickjobs.repository.NotificationRepository;
import com.quickjobs.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service("notificationService")
public class NotificationServiceImpl implements NotificationService{
    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public void sendNotification(NotificationDTO notificationDTO) throws JobPortalException {
        notificationDTO.setId(Utilities.getNextSequence("notification"));
        notificationDTO.setStatus(NotificationStatus.UNREAD);
        notificationDTO.setTimestamp(LocalDateTime.now());
        notificationRepository.save(notificationDTO.toEntity());
    }

    @Override
    public List<Notification> getUnreadNotifications(Long userId) {
        return notificationRepository.findByUserIdAndStatus(userId, NotificationStatus.UNREAD);
    }

    @Override
    public void readNotification(Long id) throws JobPortalException {
        Notification noti = notificationRepository.findById(id).orElseThrow(()->new JobPortalException("No " +
                "notification found"));
        noti.setStatus(NotificationStatus.READ);
        notificationRepository.save(noti);
    }
}
