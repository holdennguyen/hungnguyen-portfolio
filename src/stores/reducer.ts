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
      url: "https://github.com/holdennguyen/kubernetes-install-cluster-with-kubeadm",
      name: "Kubernetes Cluster",
      description: "Bootstrapping K8s cluster with kubeadm (Provisioning by Vagrant & Virtual Box)",
      language: "",
      product: "git",
    },
    {
      id: 1,
      url: "https://github.com/holdennguyen/wordpress-route53-lightsail",
      name: "Wordpress Server",
      description: "Hosting Wordpress in Amazon Lightsail & Route53 with SSL Certificates",
      language: "",
      product: "git",
    },
    /*{
      id: 2,
      url: "",
      name: "",
      description: "",
      language: "",
      product: "git",
    },
    {
      id: 3,
      url: "",
      name: "",
      description: "",
      language: "",
      product: "git",
    },
    {
      id: 4,
      url: "",
      name: "",
      description: "",
      language: "",
      product: "web",
    },*/

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