---
sidebar_position: 6
---
# Backup Policy
Ananta Cloud of Information Technology Infrastructure systems must adhere to backup policy. Backups shall be taken & tested for critical information assets, Software & System Image to restore in case of data loss/Damage.
## Target - Users
The user of this policy is all Ananta customers & internal infrastructures.
## Scope
The scope of this policy extends to the backup of critical information in devices such as Servers, Routers, Switches, systems and Ananta customer data.
## Responsibility
### System Administration Group,  Operations and Maintenance Group

- Taking back up of information software and system images as per this policy.
- Ensuring the backup media availability and integrity.
- Monitoring and reporting the breaches to the Information Security Group (ISG)
- Working with ISG in the event of a breach of this policy to ensure appropriate analysis and corrective action is taken.

### IMO Officer (CISO)
Authorization of change requests and periodic review of backup audit.

### ISG
- Ensuring compliance with this policy.
- Working with respective group and other areas as appropriate in order to address breaches to this policy.

## Backup Policy Standard Detail

- A backup is the process of copying files from disk storage to a dedicated storage device so that files may be restored in the event of damage or loss of data. In general, the processed data, the router configuration, server data etc. shall be stored in the dedicated storage device. An agreed list (by the respective group) of files is backed up.
- The owners of the information assets like servers, database, software, applications, network devices and other information assets shall identify the data to be backed up.
- The backup plan with a schedule shall be documented and shall be available for reference and verification with the information asset owner and the team responsible for the execution of the backup schedule.
- Backup shall be stored in secure locations in a controlled environment.
- The extent (e.g. full or differential backup) and frequency of backups should reflect the business requirements of the organization.
- The backups should be stored in a remote location, at a sufficient distance to escape any damage from a disaster at the main site.
- A documented back up restoration procedures shall be maintained.
- Backed up media should be regularly tested to ensure that they can be relied upon for emergency use when necessary.
- In situations where confidentiality is of importance, backups should be protected by means of encryption.

### Backup Schedule
- Responsibility of taking backup as per the backup schedule: End user or Acronis cloud support team.
- List of directories and files to be backed up: Either Entire machine or selected files/folder/mountpoints/drives.
- Types of backups to be performed: **Monthly-full**, **Weekly-Differential**, **Daily-Incremental**.
- Type of media to be used for taking and restoring the concerned backup: Ananta in-house storage device.
- Backup Timings: Off business hours.
- Retention period: Standard: **90 Days**.
- Post 90 days, the data will be automatically deleted by the tools.

The backup plan with a schedule shall be documented and shall be available for reference and verification with the information asset owner and the team responsible for the execution of the backup schedule.

### Disaster Recovery
Backed-up data are stored in a cross-site location, which is presently at STPI-Chennai/Bhubaneshwar