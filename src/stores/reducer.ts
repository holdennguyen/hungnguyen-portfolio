import { createSlice } from "@reduxjs/toolkit"

export type repoState = {
  id: number | string,
  url: string,
  name: string,
  description: string,
  language: string
}

const initState = {
  repoList: [
    {
      id: 0,
      url: "https://github.com/holdennguyen/jenkins-setup-aws",
      name: "Setup HA Jenkins on AWS",
      description: "Deploy Jenkins on an AWS Autoscaling group with an Application Load Balancer and EFS filesystem for Jenkins’s data directory",
      language: "",
      product: "git",
    },
    {
      id: 1,
      url: "https://github.com/holdennguyen/cicd-pipeline-java-webapp",
      name: "CI/CD Pipeline for Java web app",
      description: "Provisioning AWS Infrastructure by Terraform. Create Jenkins pipeline with multiple stages: Maven build, publish to Nexus, use Ansible to download artifact and deploy on Docker container",
      language: "",
      product: "git",
    },
    {
      id: 2,
      url: "https://github.com/holdennguyen/kubernetes-install-cluster-with-kubeadm",
      name: "Kubernetes Cluster",
      description: "Bootstrapping K8s cluster with kubeadm (Provisioning by Vagrant & Virtual Box)",
      language: "",
      product: "git",
    },
    {
      id: 3,
      url: "https://github.com/holdennguyen/kasm-workspaces-single-server",
      name: "Kasm Workspaces",
      description: "Streaming containeried apps & desktops to browser. Automation hosting Kasm Workspaces with Terraform and Linode cloud.",
      language: "",
      product: "git",
    },
  ]

}

export const repoSlice = createSlice({
  name: "repo",
  initialState: initState,
  reducers: {
    display: (state) => state
  }
})

export default repoSlice;

export const { display } = repoSlice.actions;