addSubDomain({
  description: 'rainproxy project', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'rain', // desired subdomain name
  owner: {
    repo: 'https://github.com/MahmoudHashemi/imdomain',
    email: 'info.jibisite@gmail.com',
  },
  record: {
    CNAME: 'cloud1--git.rainlist.site', 
  },
  proxy: true, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
