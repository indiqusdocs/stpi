---
sidebar_position: 5
---
# Configuring Alerts on RHEL Instances

Alerts get triggered whenever a configured condition is met. You can create multiple alerts on an instance. Alerts are sent to recipients that you can define and manage.

You can configure alerts for instances running on the Ananta. You can define alerts for Instances and configure the email recipients for these alerts using a straightforward and easy-to-use interface.

Navigate to a [RHEL Instance](AboutRHELInstances.md) and access the **Alerts** tab to view the configured alerts or configure new ones.
## Instance Alerts

The Alerts tab lists all the alerts already configured for that particular RHEL Instance. In addition, it will show the details, i.e., ID, the name for the alert, Parameter, Trigger When, Value, and Reading Duration.
## Adding an Alert

You can create or add alerts simply by clicking on the **Add Alert** button. The following screen will open up, and you can configure the alert using the on-screen input form.

The various fields of the add alert page are described below:

1. **Name** - You can define the name for your alert.
2. **Choose Parameter** - This option will allow you to define what parameter needs to be monitored to trigger the alert email. Ananta Cloud supports CPU, RAM, Disk, 1-min Load Average, 5- min Load Average, 15- min Load Average parameters.
3. **Trigger when** - This set of options lets you define whether to trigger above or below a custom value.
4. **Value** - You can define the trigger value/threshold.
5. **Reading duration** - This option lets you define the breach window, i.e., the duration for which the breach has to be consistent to trigger the alert email.
6. **Send email to** - Email IDs (comma-separated) can be added here, or also you can add them by using the configure recipients.
![Creating Alert](img/CreatingAlert.png)
## Managing Recipients

This will list and display all the email IDs already configured for the alerts. You can delete the existing ids and add other email ids by these steps:
1. Click on the **Manage Recipients** button.
2. Click on **+ Add more recipients**.
3. Add the email ids; multiple IDs can be added (separated by comma).
4. Click on the **+** icon.
5. Click on the **Update** button, and update the recipient's list.
	![Update Recipients](img/UpdateRecipients.png)
:::note
All the recipients configured will receive all the setup alerts. If no email ID is configured or added, then no email will be sent for the already configured alerts.
:::


