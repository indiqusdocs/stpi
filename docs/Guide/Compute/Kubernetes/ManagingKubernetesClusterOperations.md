---
sidebar_position: 9
---
# Managing Kubernetes Cluster Operations
Manage kubernetes cluster operations to control the lifecycle and capacity of your cluster. These operations enable you to stop the cluster for maintenance, scale resources to meet workload demands, and delete the cluster when it is no longer required, helping you efficiently manage your Kubernetes environment.

Ananta Cloud provides the following operations on Kubernetes cluster:
- [Stopping a Kubernetes Cluster](#stopping-a-kubernetes-cluster)
- [Scaling a Kubernetes Cluster](#scaling-a-kubernetes-cluster)
- [Deleting a Kubernetes Cluster](#deleting-a-kubernetes-cluster)
## Stopping a Kubernetes Cluster
Stop a Kubernetes cluster to temporarily suspend its operation for maintenance, troubleshooting, or resource management. Stopping the cluster pauses its services and workloads until you start it again.

To stop a Kubernetes cluster, follow these steps:

1. Navigate to **Compute > Kubernetes**. The following screen appears:![New Kubernetes Cluster](img/KubernetesCluster1.png)
2. Click on your created Kubernetes cluster name from the list.
3. Click **Operations**. The following screen appears:![Cluster Operations](img/ClusterOperations.png)
4. Click the **Stop Cluster** button. The following screen appears:![Stop Cluster](img/StopCluster.png)
5. Click the **Yes** button.

## Scaling a Kubernetes Cluster

Scale a Kubernetes cluster to adjust its compute capacity based on workload requirements. Scaling helps you increase or decrease the number of worker nodes, ensuring optimal performance, resource utilization, and application availability.

To scale a Kubernetes cluster, follow these steps:

1. Navigate to **Compute > Kubernetes**. The following screen appears:![New Kubernetes Cluster](img/KubernetesCluster1.png)
2. Click on your created Kubernetes cluster name from the list.
3. Click **Operations**. The following screen appears:![Cluster Operations](img/ClusterOperations.png)
4. Click the **Scale Cluster** button. The following screen appears where you specify the Kubernetes cluster size in **Cluster Size (Worker Nodes)**:![Scale Cluster Operation](img/ScaleCluster.png)
5. Click the **Confirm Scaling** button.

## Deleting a Kubernetes Cluster

Delete a Kubernetes cluster when it is no longer required. Deleting the cluster permanently removes its configuration, worker nodes, and associated resources, helping you free up infrastructure resources and avoid unnecessary costs.

To delete a Kubernetes cluster, follow these steps:

1. Navigate to **Compute > Kubernetes**. The following screen appears:![New Kubernetes Cluster](img/KubernetesCluster1.png)
2. Click on your created Kubernetes cluster name from the list.
3. Click **Operations**. The following screen appears:![Cluster Operations](img/ClusterOperations.png)
4. Click the **Delete Cluster** button. The following screen appears:   ![Delete Cluster](img/DeleteCluster.png)
5. Enter **DELETE** and click the **Delete Now** button.