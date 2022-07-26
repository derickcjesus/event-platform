import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4stesoq2jco01yygwqbhb6p/master',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTgyNTcyNDEsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w0c3Rlc29xMmpjbzAxeXlnd3FiaGI2cC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZDY0ZWRkYWUtMTM1NC00NmFjLWI5ZmYtYjVhZTZhMGYzNjk2IiwianRpIjoiY2w1c2pqbzdwMWNyNjAxdWtkNHV3YngwNyJ9.ZKb_tsjJeotJMZCqy1UwJ5FzVQFvHBhJM55P_88WffvpA3_G4yV1-tT0gfL2Yu3QPHC78uhFK8q97xNBE3inOhStms8_LpAOVCubVVI4W5_MbwpRFkLvy7_hL82N-uFGXZYHpkwF8hpdNjC773pjuNt7nbax7UG4aE93n_O6roYNXQakVGO83e7vSSw0MeU9EDG9gTASMNFE1sPEAqfpThYg9naDIr_r2CruTa9-OpKsnZVxzcS7GssamhYt77_Op3tilc8PXCBGDwviAagAzPLpMnxkf56fm1PoVcz7yVJypP4rJHcT3jdEqkY-HRnCobI1GsMzSWz6U3X3CL2vPb9V5cmfbPeQyZo86vyuAEfYPrdu32gkT4tbtbB04kWTzLgtCv4zT_zpWU4I9-WFPyCkTpHIsFcGzu1djv0iKzW-e8eDKuznRWEUo2g1P1lbE8UY9F80Jzh8ft0wSoXC36KoAGhFy4rOfvilxXSo4dmWixRvGUxKkTQtzQwWoEFqzxaTt4ihoRCmhFMcqSRF3NqIqqws7VBxjF9fokdcIc0IektHAfNSNJoePsvr4nRqgNsPNuwwvWGQabA84T8eYSXi_WRMrfWwRwR2hFlahVynZRPti3OCvBa3ZZKuEQYPcWBIs6tKrJzHNpJB4yhb9cH_8CtllPOABQeGhpY_vno'
  },
  cache: new InMemoryCache()
})
