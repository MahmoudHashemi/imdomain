addSubDomain({
  description: 'rainproxy project',
  domain: 'is-an.app', 
  subdomain: 'rain', 
  owner: {
    repo: 'https://github.com/MahmoudHashemi/imdomain',
    email: 'info.jibisite@gmail.com',
  },
  record: {
    NS: ['may.ns.cloudflare.com', 'sid.ns.cloudflare.com'], 
  },
  proxy: true, 
})
