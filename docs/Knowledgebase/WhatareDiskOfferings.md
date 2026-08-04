---
sidebar_position: 9
---
# What are Disk Offerings?

This section covers the Disk Offerings available for storage volumes. You can choose between encrypted and non-encrypted offerings based on your security and compliance requirements.

## Non-Encrypted Offering
Non-Encrypted Offering provides standard storage volumes without encryption at rest. It is suitable for workloads that do not require encrypted storage and offers the same storage functionality without additional encryption.

## Encrypted Offering
An encrypted offering is a cloud feature that uses encryption to protect data from unauthorized access. Encryption converts plaintext into an unreadable format, ciphertext, using cryptographic algorithms. This feature allows you to secure your data without implementing complex encryption mechanisms manually.

### Key Benefits
Using encrypted offerings provides several advantages:

- Enhances data security
- Protects confidential and sensitive information
- Simplifies compliance with industry regulations
- Minimizes the risk of data exposure
- Builds trust by ensuring data confidentiality
- Provides built-in security without requiring extensive manual configuration

### Use Cases
Encrypted offerings are commonly used to secure:

- Personal information
- Financial records and payment data
- Healthcare and medical records
- Business-critical applications
- Application logs and backups
- Databases containing sensitive information

The following table lists the operations that support encrypted and non-encrypted offerings in the NGC portal:

| Operation                                         | Encrypted Offering | Non-Encrypted Offering |
| ------------------------------------------------- | ------------------ | ---------------------- |
| Start/Stop Instance                               | Yes                | Yes                    |
| Reboot Instance                                   | Yes                | Yes                    |
| Reinstall Instance                                | Yes                | Yes                    |
| Change Instance Service Offering                  | Yes                | Yes                    |
| Instance Restore Point                            | Yes                | Yes                    |
| Disk Restore Point (Running Instance)             | No                 | Yes                    |
| Recurring Restore Point                           | No                 | Yes                    |
| Attach/detach volume                              | Yes                | Yes                    |
| Disk Restore Point (stopped Instance)             | Yes                | Yes                    |
| Revert to Restore Point                           | Yes                | Yes                    |
| Resize Volume                                     | Yes                | Yes                    |
| Delete Volume                                     | Yes                | Yes                    |
| Download Volume                                   | No                 | Yes                    |
| Recurring Disk Restore Point                      | No                 | Yes                    |
| Create Template from encrypted Disk Restore Point | No                 | Yes                    |
| Create Volume from encrypted Disk Restore Point   | No                 | Yes                    |

NGC supports both encrypted and non-encrypted offerings. You can select encryption offerings wherever possible to strengthen the security of your cloud infrastructure and safeguard critical business data.
