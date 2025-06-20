---
sidebar_position: 2
---
# Linking Domains to Ananta Cloud Console

The Ananta-powered cloud will have nameservers if the service provider has enabled this Service. These name servers are simply fully-qualified domain names (FQDN) for the servers that will store all the domain/zone information. Typically, these name servers will be in the following format:

```
ns1.<cloud-url>  
ns2.<cloud-url>  
ns3.<cloud-url>
```


There are two main steps involved in linking your owned domains to Ananta DNS.

1. Navigate to **Networking > DNS Management** and use the **NEW ZONE** button to inform Cloud Console about the domain you'd like to use. On Ananta, each domain name is stored as a **Zone** file.
	:::note
	Ananta supports pricing per DNS Zone, which may be either a monthly or a one-time cost, depending on how the cloud service provider has priced the service. Once the Zone file has been created, navigate into the Zone from the list of available DNS Zones and go to the **Nameservers** section, where you'll find the nameserver information.
	:::
2. In a different tab or browser window, open the **control panel** of your domain name provider (e.g., Bigrock, GoDaddy, Dreamhost, etc.) 
3. Navigate to the section where DNS records are managed on the control panel. Typically, there will be a dedicated section for nameservers that can be edited. Find that section and edit the nameserver details to update them with the values from DNS Management on Ananta Cloud Console.

Once the nameservers have been propagated (which takes around 5-10 minutes), you'll be able to find your updated nameserver information if you whois your domain name. This also implicitly establishes your ownership of the domain.


