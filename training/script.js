const obj = JSON.stringify({
  requires: true,
  lockfileVersion: 1,
  dependencies: {
    axios: {
      version: "0.20.0",
      resolved: "https://registry.npmjs.org/axios/-/axios-0.20.0.tgz",
      integrity:
        "sha512-ANA4rr2BDcmmAQLOKft2fufrtuvlqR+cXNNinUmvfeSNCOF98PZL+7M/v1zIdGo7OLjEA9J2gXJL+j4zGsl0bA==",
      requires: {
        "follow-redirects": "^1.10.0",
      },
    },
    "follow-redirects": {
      version: "1.13.0",
      resolved:
        "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.13.0.tgz",
      integrity:
        "sha512-aq6gF1BEKje4a9i9+5jimNFIpq4Q1WiwBToeRK5NvZBd/TRsmW8BsJfOEGkr76TbOyPVD3OVDN910EcUNtRYEA==",
    },
  },
});
console.log(obj);
