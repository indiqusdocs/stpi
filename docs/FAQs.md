---
sidebar_position: 13
---

# Frequently Asked Questions

<details><summary>**What happens if I miss a payment due date?**</summary>Depending on how your service provider has set up the payment collections policies, one of the following might happen: <br />
**1.** You may be able to continue using your cloud account (uninterrupted usage); <br />
**2.**  You might get payment due date notifications (reminder state); <br />
**3.** You might be disallowed from purchasing new resources but continue to use existing ones (restricted usage); <br />
**4.** You might be put in a disabled state along with all your cloud resources (suspended state); <br />
**5.** You might lose access to your account and all your resources entirely (terminated state). While scenario 1 is the most ideal, realistically one of 2-5 will be configured as a policy. To avoid any likelihood of these events, it is best recommended to always pay your due invoices on time and never miss a due date.</details>

<details><summary>**How is my wallet balance calculated?**</summary>
Wallet balance or [Service Balance](/docs/AccountCentre/WalletandTransactions) is a real-time 'ability to spend' on Ananta Cloud Console. It is a net total of your credit limit, all charges incurred and all payments made for your account. <br />
`Service Balance = Credit Limit - sum(Incurred Charges) + sum(Payments)`</details>

<details><summary>**How can I deploy monitoring tools and other apps on my Kubernetes cluster?**</summary>Once a cluster is deployed, you can deploy pretty much any application using kubectl. Some examples:<br />
**- Postgres DB service**: a PostgreSQL Instance can be deployed on a running Kubernetes cluster using the `kubeconfig` manifests. At this moment, we have not automated this. However, there are standard methods of deploying apps and packages (example) available online, all of which just require cluster access via `kubectl`. The same should be applicable to MongoDB and MySQL instances on clusters.<br />
**- Persistent storage**: CKS uses CloudStack’s block volumes for cluster storage. As of now, CKS does not support using NFS or S3 as persistent storage for Kubernetes clusters. However, once a cluster is created, its PersistentVolume can be pointed to a S3 bucket using the Cloudian S3 operator.<br /> 
**- Monitoring of Kubernetes infrastructure**: users can freely install their own monitoring apps (e.g., Prometheus+Grafana, Rancher etc.) using `kubectl` and Helm Charts.<br /> 
**- Gitlab, ArgoCD**:  these apps can be installed using Helm.<br />
**- Advanced Load balancing and Certificate management**: typically these are handled at the cloud provider level and not at the Kubernetes level.<br /></details>

<details><summary>**Can I deploy a Kubernetes cluster with a private registry?**</summary>Private registry is not supported on Ananta Cloud Console. However, using the Ananta API gateway, you can still pass the private registry details (username, password, URL) as the API query parameters and the API will work as intended, but with restrictive SLA on support.</details>

<details><summary>**Why can't I access Kubernetes cluster nodes or cluster volumes directly?**</summary>Accessing cluster nodes and volumes is disabled on Ananta Cloud Console in order to maintain sanity around cluster billing mechanisms.</details>

<details><summary>**Can I deploy stateful applications using Ananta Kubernetes?**</summary>Yes, Kubernetes supports stateful applications using features like StatefulSets and Persistent Volumes for data storage.</details>

<details><summary>**Can I use my S3 bucket with a Kubernetes cluster created on Ananta Cloud Console?**</summary>Yes, if the S3 bucket has been created using the Ananta S3 Service, you can use the CSI (container storage interface) plugin maintained by Cloudian. If you're using a hyperscaler S3 service or a ceph cluster, you can use the CSI maintained by the hyperscaler (or ceph) with your Kubernetes cluster created on Ananta Cloud Console.</details>

<details><summary>**Which Kubernetes versions are supported on Ananta Cloud Console?**</summary>Ananta supports Kubernetes versions 1.20.x and above.</details>

<details><summary>**Can I modify my VPC's super CIDR after creation?**</summary>No, super CIDR modification is not currently allowed on Ananta Cloud Console. If you wish to change the supernet, it is recommended that you create a new VPC, new subnets and migrate Instances to the new VPC.</details>

<details><summary>**What traffic will I be charged for in a VPC?**</summary>In a VPC, any east-west traffic is free. This includes any traffic or communication between subnets, load balancing between Instances etc. <br />North-south traffic may be chargeable based on your country of usage and/or service provider's preferences. This includes any traffic moving in and out of the VPC through the VR. </details>

<details><summary>**Can I use Terraform to provision my cloud resources?**</summary> Yes, Ananta Cloud Console supports infrastructure as code (IaC) and cloud resource creation using Terraform and the Ananta Gateway API.<br />Any resource created using IaC will be billed hourly.</details>

<details><summary>**Can I upload my own ISO or VHD images?**</summary>No, custom Image uploads are currently not possible on Ananta Cloud Console.</details>

<details><summary> **Can control and worker nodes be scaled individually in a Kubernetes cluster**</summary>No, when a Kubernetes cluster is scaled, the scaling configurations are applied to all the nodes alike.<br /> The following [scaling modes](/docs/Compute/Kubernetes/ScalingKubernetesClusters) are available:
<br/>**Scaling the Control Node** - this can be done by enabling HA at the time of cluster creation;<br/>**Scaling the number of Worker Nodes** - this can be done by specifying minimum and maximum cluster size (Control Nodes are excluded from these limits);<br/>**Reconfiguring the Cluster** - this can be done by specifying a new number of Worker Nodes and changing their Compute configuration.<br/></details>

<details><summary>**Is there a way to add or link multiple emails to an account?**</summary>Yes, multiple email IDs can be used to login to the same subscriber 'parent' account by [creating child users](/docs/AccountCentre/TeamandChildUserManagement). Child users are semi-isolated accounts, in the sense that they all have their own identities on Ananta Cloud Console, but share all resources created in the parent subscriber account.</details>

<details><summary> **How can I get admin credentials for Windows Instances on Ananta Cloud Console?**</summary>When you create a Windows Instance on Ananta Cloud Console, you will receive the password on the email ID registered for your Ananta Cloud Console account.</details>

<details><summary>**Can Kubernetes clusters be created with differently-sized control and worker nodes?**</summary>No, Ananta Kubernetes Service (AK8s) only supports equally-sized Control and Worker nodes in a Kubernetes cluster.</details>

<details><summary>**Can root disks be attached to other Instances?**</summary>No, Root Volumes, i.e., root disks that are created at the time of Instance creation, can not be moved between Instances.<br/>Data Volumes, i.e., addon disks that are created separately, can be attached to and detached from Instances. In other words, Data Volumes are portable while Root Volumes are not.</details>

<details><summary>**Will I be billled for the entire month if I don't use a resource for the whole month?**</summary>Resources are billed based on pro-ration rules defined by the service provider. Pro-ration works in the following ways:<br/>
**- Pro-rate on entry:** this means that, if enabled, your resource will be billed **from** the date of purchase and not from the beginning of the billing month.<br/>
**- Pro-rate on exit:** this means that, if enabled, your resource will be billed **till** the date of usage and not till the end of the billing month.<br/>
Here's a more detailed illustration:<br/></details>
|     |Pro-ration on entry ON|Pro-ration on entry OFF|Pro-ration on exit ON|Pro-ration on exit OFF|
|---|---|---|---|---|
|Resource purchased on 8th of the month, used for the remainder of the month or deleted on last day of month|Billing start w.e.f. 8th of the month; total billable days 22 (or 23 based on length of month)|Billing start w.e.f. 1st of the month; total billable days 30 (or 31 based on length of month);|No impact|No impact|
|Resource purchased on 1st of the month or continued from previous month, used till 23rd of month|No impact|No impact|Billing end on 23rd of the month; total billable days 23; no renewal next billing cycle|Billing end on last day of month; total billable days 30 (or 31 depending on length of month); no renewal next billing cycle|
|Resource purchased on 8th of the month; used till 23rd of the month|Billing start w.e.f. 8th of the month; total billable days 16 if pro-rate on exit ON; 22/23 if pro-rate on exit OFF|Billing start w.e.f. 1st of the month; total billable days 23 if pro-rate on exit ON; 30/31 if pro-rate on exit OFF|Billing end on 23rd of the month; total billable days 16 if pro-rate on entry ON; 23 if pro-rate on entry OFf; no renewal next billing cycle|Billing end on 30/31st of the month; total billable days 22/23 if pro-rate on entry ON; 30/31 if pro-rate on entry OFf; no renewal next billing cycle|


