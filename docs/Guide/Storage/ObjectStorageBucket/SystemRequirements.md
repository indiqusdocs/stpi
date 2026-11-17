---
sidebar_position: 1.1
---
# System Requirements

This section outlines the software and infrastructure prerequisites for deploying the Object Storage Bucket storage. Use this information to verify system compatibility, plan hardware resources, confirm licensing requirements, and ensure that your environment meets the recommended configurations for a reliable and production-ready deployment.

This section covers the following topics:
- [Software Version](#software-version)
- [Management Instance Requirements](#management-instance-requirements)
- [Recommended Configuration](#recommended-configuration)
- [Minimum Requirement for Production Systems](#minimum-requirement-for-production-systems)
- [Operating System Requirements](#operating-system-requirements)
- [HyperStore License](#hyperstore-license)
- [Hardware BoQ](#hardware-boq)

## Software Version
The required version may vary depending on the HyperStore release. The recommended version is Cloudian HyperStore 7.4.1.
## Management Instance Requirements
Cloudian HyperStore runs as a software-defined storage solution on industry-standard x86 servers.
## Recommended Configuration
The following are the recommended configurations:
- **CPU**: 1 CPU with 8 cores
- **RAM**: 64 GB
- **OS and metadata storage:** 2 × 300 GB SSDs configured in RAID 1 (mirroring) to host the operating system and the Cassandra and Redis databases, which store system metadata.
- **Object storage**: 12 × 4 TB HDDs using ext4 file systems to store object data. Configure the disks as JBOD without RAID.
- **Network**: 2 × 10 GbE ports
## Minimum Requirement for Production Systems 
The following are the required configurations for production systems:
- **CPU**: 1 CPU with 8 cores
- **RAM**: 32 GB
- **OS and metadata storage**: 2 × 160 GB SSDs configured in RAID 1 (mirroring) to host the operating system and the Cassandra and Redis databases, which store system metadata.
- **Object Storage**: 12 × 2 TB HDDs using ext4 file systems to store object data. Configure the disks as JBOD without RAID.
- **Network**: 1 × 1 GbE port

## Operating System Requirements
To perform a fresh installation of HyperStore 7.4.1, you must have an RHEL 7.x or CentOS 7.x Linux operating system on each host.
## HyperStore License
A software license is required to use Cloudian HyperStore. You should contact Cloudian or their authorised partners to discuss licensing options, pricing, and any specific requirements related to software licensing. Ananta doesn’t ship with a Cloudian HyperStore license.

## Hardware BoQ
The hardware Bill of Quantity (BoQ) will depend on expected data capacity, performance requirements, and desired redundancy levels. Cloudian provides hardware guidelines and recommendations for deploying HyperStore, including information on server specifications, disk configurations, networking, and power requirements. 
:::note
Refer to the official documentation or contact Cloudian or its authorized partners to determine the hardware BoQ that best meets your requirements.
:::


