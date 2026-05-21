import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const LOGO_B64 =
  "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA4MTYgOTIwIj4KICA8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMzAuMy4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogMi4xLjMgQnVpbGQgMTgyKSAgLS0+CiAgPGRlZnMgZmlsbD0iIzFhMWExYSI+CiAgICA8c3R5bGU+CiAgICAgIC5zdDAsIC5zdDEgewogICAgICAgIGZpbGw6ICNmYmY2ZTg7CiAgICAgIH0KCiAgICAgIC5zdDAsIC5zdDIgewogICAgICAgIGRpc3BsYXk6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0wLDkyMFYwaDgxNnY5MjBIMFpNNDY4LjUsODY3LjZoNDQuNmMzMC42LTEuNCw1OS45LTkuMiw4Ny43LTIxLjcsNTAuNS0yMi43LDkxLjgtNjEuNywxMTQuNi0xMTIuMyw2LjYtMTQuNiwxMi4xLTI5LjMsMTQtNDVsMS43LTEzLjZjMi4xLTE2LjkuNy0zMy44LDAtNTAuOCwyMy40LTEuNiw0NC4yLTExLjIsNTguNC0yOS43LDE0LjktMTkuNiwyMC00OC41LDE3LjItNzMuMXMtMTQuOS02Mi41LTQwLjYtODMuNC00OS42LTE2LTY5LDFsLTE2LDE0LTEzLjUtMTcuNi0yMi43LTIzLjItMTAuMi03LjljLTE0LjYtMTEuNC0zMS42LTE5LTUwLTI0LjRsLTIzLjEtNzIuMy0xMi40LTM3LjgsOS02LjZjMjkuMy0xOC4zLDU2LjgtNDkuOCw2MS4xLTg0LjMsMS41LTExLjYsMS42LTI0LDAtMzUuNi0zLjMtMjUtMTYuNC00Ny45LTM0LjctNjQuNnMtMzQuOS0yMi42LTU2LjEtMjYuNGMtMTAuMSwwLTIwLjItMS0zMC40LjItMjIuNSwyLjctNDIuOCwxMy4zLTYwLjQsMjguMi0zMi41LTI2LjYtNjgtMzYuMy0xMDkuNi0zMS41LTM2LjksNS41LTcyLjMsMjMtOTcuMSw1MS05LjgsOS4yLTE2LjksMjAuMS0yMy4xLDMycy0xMy44LDMzLjEtMTUuNCw1Mi4xYy0yNC45LjgtNTMuNSwxNC42LTcwLjUsMzMuMS0xNywxNS41LTI5LjQsMzUuNS0zMy4yLDU4LjctNCwyNC42LDIuOCw1Mi42LDE3LjMsNzNzMTYuMywxOS4xLDI2LjQsMjYuMmMyMC43LDE0LjYsNTIuMSwyMi4xLDc3LDE1LjdsMTkuOS01LjIsMTguOSw2OCwxMS40LDM5LjItMTMuMywyMS44Yy0xMC44LDE3LjYtMTUuNSwzNy43LTE4LjgsNTguNC0uOSwwLTMuNy0uNC00LjctLjktOS44LTUuNi0yMC40LTguNi0zMS42LTEwLjYtMzMuMS02LTYxLjIsOC4yLTc4LjUsMzYuNXMtMTMuMiwzNC4yLTEzLDUzLjEsNS40LDM3LjYsMTQuMiw1NC43YzYsMTEuNiwxMi40LDIyLjQsMjIuNCwzMC43bDEyLjcsMTAuNmMxOC4zLDEzLjgsNDEuMiwyMi41LDY0LjcsMjIuNywxOS42LjIsMzYuOC02LjksNTMuNS0xNi45bDguNiwxNC4yYzUuMSw4LjQsMTAsMTcsMTcsMjMuOWwyMi41LDIyLjRjMzIuOCwyOC4yLDc5LjYsNDQsMTIyLjEsNTAuOGwzMC45LDMuM1oiIGZpbGw9IiMxYTFhMWEiLz4KICA8cGF0aCBkPSJNNDY4LjUsODY3LjZsLTMwLjktMy4zYy00Mi41LTYuOC04OS4zLTIyLjYtMTIyLjEtNTAuOGwtMjIuNS0yMi40Yy03LTctMTItMTUuNi0xNy0yMy45bC04LjYtMTQuMmMtMTYuNyw5LjktMzMuOSwxNy4xLTUzLjUsMTYuOS0yMy40LS4yLTQ2LjQtOC45LTY0LjctMjIuN2wtMTIuNy0xMC42Yy0xMC04LjMtMTYuNC0xOS4xLTIyLjQtMzAuNy04LjgtMTcuMS0xNC0zNS4zLTE0LjItNTQuN3MzLjEtMzcuMSwxMy01My4xYzE3LjQtMjguMyw0NS41LTQyLjUsNzguNS0zNi41LDExLjIsMiwyMS43LDUsMzEuNiwxMC42czMuNywxLDQuNy45YzMuNC0yMC43LDguMS00MC44LDE4LjgtNTguNGwxMy4zLTIxLjgtMTEuNC0zOS4yLTE4LjktNjgtMTkuOSw1LjJjLTI1LDYuNS01Ni4zLTEuMS03Ny0xNS43LTEwLjEtNy4xLTE5LjItMTYuMS0yNi40LTI2LjItMTQuNS0yMC40LTIxLjMtNDguNC0xNy4zLTczLDMuOC0yMy4xLDE2LjItNDMuMSwzMy4yLTU4LjcsMTctMTguNCw0NS42LTMyLjMsNzAuNS0zMy4xLDEuNi0xOSw2LjgtMzUuOCwxNS40LTUyLjFzMTMuMy0yMi44LDIzLjEtMzJjMjQuNy0yOCw2MC4xLTQ1LjQsOTcuMS01MSw0MS41LTQuOCw3Ny4xLDQuOSwxMDkuNiwzMS41LDE3LjYtMTQuOCwzNy45LTI1LjUsNjAuNC0yOC4yLDEwLjItMS4yLDIwLjMtLjIsMzAuNC0uMiwyMS4yLDMuNyw0MCwxMS42LDU2LjEsMjYuNHMzMS40LDM5LjYsMzQuNyw2NC42YzEuNSwxMS42LDEuNCwyMy45LDAsMzUuNi00LjQsMzQuNS0zMS44LDY2LTYxLjEsODQuM2wtOSw2LjYsMTIuNCwzNy44LDIzLjEsNzIuM2MxOC40LDUuNCwzNS40LDEzLjEsNTAsMjQuNGwxMC4yLDcuOSwyMi43LDIzLjIsMTMuNSwxNy42LDE2LTE0YzE5LjQtMTcsNDguMS0xOCw2OS0xczM2LjksNTAuOCw0MC42LDgzLjQtMi4zLDUzLjUtMTcuMiw3My4xYy0xNC4xLDE4LjUtMzQuOSwyOC4xLTU4LjQsMjkuNy43LDE3LDIuMSwzMy45LDAsNTAuOGwtMS43LDEzLjZjLTEuOSwxNS43LTcuNSwzMC40LTE0LDQ1LTIyLjgsNTAuNi02NC4xLDg5LjYtMTE0LjYsMTEyLjMtMjcuOCwxMi41LTU3LjEsMjAuMy04Ny43LDIxLjdoLTQ0LjZaTTIwNy4zLDMzOS45Yy0xMy40LTktMjYuMS0xOS42LTM1LjItMzMuNCwyMi42LDE1LjEsNDMuNCwyOS4yLDY3LjcsMzguOSwyNC44LTE5LjMsNTAuNy0zNS40LDc4LjUtNTAuNC0xNy44LTE5LTM1LjktMzcuNi00OC4yLTYxLjRsNDMuMyw0My44LDE0LDEzLjNjMzYuMi0xNy43LDcyLjgtMzAsMTEyLTM3LjEsNy43LTI1LjQsMTMuNi01MC42LDE4LTc2LjhsMi4xLS4zYy44LDI1LjQtMy4yLDUwLjQtOC45LDc1LjJsMzMuMi0yLjFoMTYuMXMxNC41LjMsMTQuNS4zbDI3LjUtNTQuOGMtMiwxOC40LTEwLjksMzcuMy0xOC4yLDU1LjNsMTkuNSwzLDIuNSw2LjVjMTEuMy04LjksMjEuMy0xNy4yLDMwLjYtMjcuMywyMy40LTI1LjMsMzQuMy01OC44LDI3LjctOTIuOC01LjUtMjguNy0yMy40LTUyLjMtNDkuMy02NS44LTExLjUtNi0yMy43LTkuNS0zNi43LTkuNWgtMTAuNHMtNy45LjUtNy45LjVjLTIxLjYsMi41LTQxLjYsMTEuNy01OCwyNiw1LjUsNi42LDEyLjksMTEuNCwxNS4xLDIxLTI2LjktMjQuOC02NC00Ni43LTEwMS44LTQ2LjZoLTEzLjNjLTUxLjcsMi44LTEwNC4yLDM3LTEyNC43LDg0LjYtNS45LDEzLjctOS45LDI3LjktMTEuNiw0Mi4zLDMsMiw0LjQsMy4xLDUuMiw2LjFsLTguOS00LjVjLTcuMy0xLjQtMTUuMS0uNy0yMi40LDEuMy00My43LDEyLTc5LjUsNTMuMy03NS42LDk5LjcsMS45LDIyLjEsMTEuOCw0Mi40LDI3LjMsNTcuN3MzOC41LDI0LjgsNjEuOSwyNC42YzExLjUtLjEsMjIuMi0uOCwzMy4xLTQuMWwtMy45LTEyLjYsOC40LTcuOGMtNS4zLTIuNC0xMC41LTQuNC0xNS4xLTcuNWwtOC4xLTUuNVpNNDgwLjcsMzM3LjVjMTMuOCw1LjgsMjEuNCwxNi45LDI1LjMsMjkuOSw4LjItNy4xLDEyLjgtMTYuMiwxNi4zLTI2LjUsOC42LDguNSwxMi42LDE5LjksMTMuNywzMi40LDExLjQuMiwyMS44LjksMzMuNywyLjdsLTI5LjMtOTMuMi02LjItMjAuMy0yMC42LTFjLTM1LjktMS44LTcwLjUsMi4xLTEwNS40LDExLjgtNjMuMSwxNy4xLTEyMC43LDQ4LjQtMTcyLjUsODlsMzMuMSwxMTMuN2MxNy41LTE0LjgsMzQuNy0yOCw1My45LTM5LjMsMTkuMy0xMS42LDM4LjMtMjEuMyw1OS0zMC4xLDIyLjMtOS4yLDQ0LjctMTYuMyw2OC0yMi44czE0LTYsMTkuOS0xMS4zYzEwLTkuMSwxMy0yMC43LDExLjItMzVaTTY4MS40LDQ4Mi4zYy0xNy4xLTM4LjUtNDQuNy02Ny4zLTgyLjQtODQuM3MtNDQuMS0xMy45LTY0LjEtMTEuN2MyLjUsMS4yLDUuNSwyLjQsOC41LDIuNiwyOS4yLDIuMyw1NS45LDEzLjMsNzkuNSwzMC4xLDIwLjcsMTQuOCwzNy4xLDMyLjQsNDkuMyw1NSwxNC42LDI3LjIsMjQuNCw1Ni4xLDMyLjgsODQuNy00LjgtMjcuMi0xMi42LTUxLjgtMjMuNi03Ni41Wk01NzkuMyw0MTcuNWMxLjUtLjQsMy4yLTIuOCwzLjMtNHMtMS40LTQtMi42LTQuNGMtMi42LS45LTUuNywxLjctNS40LDQuMnMyLjMsNC45LDQuOCw0LjJaTTU5OC43LDQyMi43YzQuMi0yLjQsNC02LjMsMS45LTguOHMtNC45LTQtNy44LTItMyw1LjYtMS44LDcuNiw0LjksNC45LDcuNywzLjJaTTcwNy4zLDUxMS45YzUuOSwxNy44LDEwLjgsMzQuNiwxMy45LDUyLjhsNy41LDQzLjZjMjUuOS0uOSw0Ny40LTE2LjQsNTYuNy0zOS45czYtMjQuOCw1LjktMzguNWMtLjItMzAtOS4xLTU4LjUtMzIuNi03Ny44cy0zMy40LTEyLjMtNDkuMi0zLjUtMTUuMiwxMC42LTIxLjMsMTcuNmwxNS45LDM1LjNjMTMuOS0xMy43LDI3LjctMjYuNSw0NS43LTE2LjIsNCw0LjIsNy4xLDguNCwxMC4xLDEzLjktNS42LDEtOS45LTguNi0yMC4zLTkuOS0xMS41LTEuNC0yNC44LDEyLjItMzIuNCwyMi43Wk01MDAuNiw4NDcuNWM3NC4yLDUuMSwxNTEuNS0zNS4yLDE4OC41LTEwMC40LDIzLjctNDEuOCwxMy41LTkzLjQtMjQuOS0xMjEuMmwtOS45LTcuMWMxNi40LTQ1LDE3LjgtMTAzLjMtOS45LTE0M3MtMTkuMS0yMC4xLTMyLjMtMjUuOWMtNS0yLjItMTAuNy00LjEtMTYuMy00LjUtOC43LS41LTE3LjktMS4zLTI2LjUuMS0yMC40LDMuMy0zNy4zLDE1LjktNTAsMzEuNy05LjEsMTEuMy0xNC41LDI0LjEtMTkuNiwzOGwtMTguNS0xMS40Yy0yNC44LTE0LjItNTEuMy0yMS4xLTgwLjMtMTkuOHMtNzIuNSwyNy4xLTg2LjMsNjMuOGMtMTEsMjkuMS05LjksNjAuNCwyLjYsODkuMSwxMy40LDMxLjgsNDAuNiw1NS41LDc0LjgsNjIuMy04LjMsMTYuOS0xNC40LDM0LjctMTMuOSw1NHM3LjMsMzcuMywxOS4xLDUxLjZjMjQuOSwzMCw2NS40LDQwLjMsMTAzLjQsNDIuOVpNMzQ3LjUsNDYwLjFjLTIuNCwxLTMuNSwzLjUtMyw1LC43LDIuNCwzLjIsMy45LDUuMSwzczIuOC0zLjcsMi41LTUuNS0zLjEtMy4yLTQuNi0yLjVaTTMxNi4zLDUwMS42YzE4LjEtNi40LDI5LTI5LjYsMjAuNy0zOC4zLTkuMS05LjUtMzUuOSw5LjQtMzQuOCwyOC40LjQsNyw2LjgsMTIuNCwxNC4xLDkuOFpNMjk4LjYsNTIwLjRjMi45LjgsNS4xLTIuNSw1LjItNS4xcy0zLTQuNi01LjUtMy44LTIuNiwzLjYtMi40LDUsMS42LDMuNywyLjcsNFpNMTc3LjIsNjI3LjZjLTYuNiwxLjEtMTEuMiw1LjEtMTQuNSwxMC4ycy01LjEsMTUuMS03LjcsMjQuM2MtMy44LTE3LjItMy0zNC41LDEyLjMtNDEuOCw5LTQuMywxOC45LTUuOCwyOC42LTMuMWwzMi41LDguOGMtMS41LTEyLjEtMi4zLTIxLjgtMi4zLTMzLjQtOC43LTQuNi0xNy44LTktMjcuMi0xMi41LTE0LjYtMy44LTI5LjItNS4zLTQzLjMuOHMtMjguNiwyMi4yLTM0LjQsMzkuNWMtMTUuOSw0OC40LDEyLjYsMTA0LDU5LjQsMTIzLjgsMjYuOCwxMS4zLDU0LjksOC41LDgwLjQtNS4yLTE0LjMtMzMuNS0yNS02Ny4xLTMxLjMtMTAyLjlsLTE4LjItNS44Yy0xMS4xLTMuNS0yMi42LTQuNy0zNC40LTIuN1oiIGZpbGw9IiMxYTFhMWEiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTAwLjYsODQ3LjVjLTM4LTIuNi03OC41LTEyLjktMTAzLjQtNDIuOS0xMS44LTE0LjMtMTguNi0zMi44LTE5LjEtNTEuNnM1LjYtMzcuMSwxMy45LTU0Yy0zNC4yLTYuOS02MS40LTMwLjYtNzQuOC02Mi4zLTEyLjQtMjguNi0xMy41LTYwLTIuNi04OS4xLDEzLjgtMzYuNyw0Ny4xLTYxLjksODYuMy02My44czU1LjUsNS41LDgwLjMsMTkuOGwxOC41LDExLjRjNS0xMy45LDEwLjUtMjYuNywxOS42LTM4LDEyLjctMTUuOCwyOS42LTI4LjQsNTAtMzEuNyw4LjctMS40LDE3LjktLjYsMjYuNS0uMXMxMS40LDIuMywxNi4zLDQuNWMxMy4yLDUuOCwyMy45LDE0LDMyLjMsMjUuOSwyNy44LDM5LjcsMjYuNCw5Ny45LDkuOSwxNDNsOS45LDcuMWMzOC40LDI3LjgsNDguNiw3OS41LDI0LjksMTIxLjItMzcsNjUuMi0xMTQuMywxMDUuNS0xODguNSwxMDAuNFpNNTkzLjksNDk2LjFjMTAuMiwwLDE4LjMsNS45LDI2LjEsMTEuNywzLjEtMS4zLDcuMS03LDQuOC0xMC42LTEwLTE1LjEtMzAuMi0yMS42LTQ3LTE0LjUtMTguNSw3LjktMzEuMSwzMi40LTI1LDM5LjlzNCwyLDQuOSwxLjJjNC41LTMuOSwxMi4yLTI4LDM2LjItMjcuOFpNNjAyLjMsNjAyLjdjNi41LTEsMTAtNy43LDExLjEtMTMuMiw0LjMtMjIuOC02LjgtNTIuMy0yMy4yLTQ2LjctMTguMyw2LjMtNi4zLDYyLjcsMTIuMSw2MFpNMzcwLjIsNTg1LjNjNy41LTUuMiwxNC43LTguOSwyMy4zLTguOWgyMS40YzcuMywwLDE0LC40LDIxLjEtMS40LDExLjItMi41LDE4LjgtMTEuOSwxNy43LTIzLjUtNC41LTkuMy0xMSw2LjMtMjcuNiw2LjRsLTMxLjguM2MtNy40LDAtMTMuOSwzLjMtMTkuOSw3cy03LjcsNi41LTkuMSwxMi4yLDEuOSw4LjQsNC45LDcuOFpNNDM4LjUsNjQzLjdjMTQuNS42LDIwLjYtMzMsMy45LTU0LjlzLTExLjMtNy43LTE2LjctNC4yYy0xNS45LDEwLjUtNy4xLDU4LjIsMTIuOCw1OS4xWk01NzQuNiw2MzIuOGMtMS4xLTEtNS0xLjMtNi40LS42LTguNSw0LjUtMTIuOSwxOC42LTkuNSwyNy43LDExLjEtNS44LDIxLjMtMjIuNCwxNS44LTI3LjFaTTUzMC42LDY2Ny4zbDkuOC0xLjljLTEuNS03LjMtNS43LTEwLjktMTAuOS0xNC45cy0xNy4zLTYuNy0yNC4yLDAtMy4yLDEwLjEuMywxMi45LDE3LjksNS4zLDI1LDMuOVpNNTcxLjYsNzA1LjVjLTYuMS0xMy40LTEwLjgtMjYuMy0xNC45LTQwLjJsLTIuMy0yLjJjLS41LS41LTEuOSwyLjItMi4xLDIuOSwyLjYsMTUsNy44LDI4LjgsMTUuOCw0MS44LjYuNSwyLjgsMS40LDIuOS43bC42LTNaTTU1Ny40LDc2MS45YzE2LTE1LjYsMzMuOS0yNi40LDU1LjUtMzEsMi4zLS41LDQuOC0yLjYsNC45LTQuM3MtMi01LTMuNi00LjhsLTE0LjQsMmMtMTMsMy43LTI0LjEsMTAuMS0zNC42LDE4LjMtOS41LDcuNS0yNS44LDIyLTI0LjYsMzAuNnMzLDIuNiwzLjksMS44bDEzLTEyLjZaTTU4Myw3NzIuOGM4LjItNS45LDIyLjQtMTQuMSwyMC4xLTIyLjFsLTIwLjQsMTYuM2MtLjkuNy0xLjksMi43LTIuMiwzLjRzMS43LDEuOSwyLjUsMi4zWiIgZmlsbD0iIzFhMWExYSIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMDcuMywzMzkuOWw4LjEsNS41YzQuNiwzLjEsOS43LDUuMSwxNS4xLDcuNWwtOC40LDcuOCwzLjksMTIuNmMtMTAuOSwzLjMtMjEuNSwzLjktMzMuMSw0LjEtMjMuNC4yLTQ1LTcuOS02MS45LTI0LjZzLTI1LjQtMzUuNi0yNy4zLTU3LjdjLTMuOS00Ni40LDMxLjktODcuNyw3NS42LTk5LjcsNy4zLTIsMTUuMS0yLjcsMjIuNC0xLjNsOC45LDQuNWMtLjgtMy0yLjEtNC4xLTUuMi02LjEsMS43LTE0LjQsNS43LTI4LjYsMTEuNi00Mi4zLDIwLjUtNDcuNiw3My04MS44LDEyNC43LTg0LjZoMTMuM2MzNy44LS4xLDc0LjksMjEuOCwxMDEuOCw0Ni42LTIuMi05LjYtOS42LTE0LjUtMTUuMS0yMSwxNi40LTE0LjMsMzYuNC0yMy41LDU4LTI2bDcuOS0uNWgxMC40YzEzLDAsMjUuMiwzLjUsMzYuNyw5LjUsMjUuOCwxMy41LDQzLjcsMzcuMSw0OS4zLDY1LjgsNi42LDM0LTQuMyw2Ny41LTI3LjcsOTIuOHMtMTkuMywxOC40LTMwLjYsMjcuM2wtMi41LTYuNS0xOS41LTNjNy4zLTE4LDE2LjMtMzYuOSwxOC4yLTU1LjNsLTI3LjUsNTQuOC0xNC41LS4zaC0xNi4xcy0zMy4yLDIuMS0zMy4yLDIuMWM1LjgtMjQuOCw5LjctNDkuNyw4LjktNzUuMmwtMi4xLjNjLTQuNCwyNi4xLTEwLjQsNTEuMy0xOCw3Ni44LTM5LjIsNy4xLTc1LjgsMTkuNC0xMTIsMzcuMWwtMTQtMTMuMy00My4zLTQzLjhjMTIuMiwyMy44LDMwLjQsNDIuNCw0OC4yLDYxLjQtMjcuOCwxNS4xLTUzLjgsMzEuMS03OC41LDUwLjQtMjQuNC05LjctNDUuMi0yMy44LTY3LjctMzguOSw5LjEsMTMuOCwyMS44LDI0LjQsMzUuMiwzMy40WiIgZmlsbD0iIzFhMWExYSIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00ODAuNywzMzcuNWMxLjgsMTQuMy0xLjEsMjUuOS0xMS4yLDM1cy0xMS45LDkuMi0xOS45LDExLjNjLTIzLjIsNi40LTQ1LjYsMTMuNS02OCwyMi44LTIwLjcsOC44LTM5LjcsMTguNS01OSwzMC4xLTE5LjIsMTEuMi0zNi40LDI0LjQtNTMuOSwzOS4zbC0zMy4xLTExMy43YzUxLjgtNDAuNiwxMDkuMy03MS45LDE3Mi41LTg5LDM0LjgtOS43LDY5LjUtMTMuNiwxMDUuNC0xMS44bDIwLjYsMSw2LjIsMjAuMywyOS4zLDkzLjJjLTExLjktMS44LTIyLjMtMi41LTMzLjctMi43LTEuMS0xMi41LTUtMjMuOS0xMy43LTMyLjQtMy41LDEwLjMtOC4xLDE5LjQtMTYuMywyNi41LTQtMTIuOS0xMS41LTI0LTI1LjMtMjkuOVoiIGZpbGw9IiMxYTFhMWEiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTc3LjIsNjI3LjZjMTEuOC0yLDIzLjQtLjgsMzQuNCwyLjdsMTguMiw1LjhjNi4zLDM1LjgsMTcsNjkuNSwzMS4zLDEwMi45LTI1LjUsMTMuOC01My43LDE2LjYtODAuNCw1LjItNDYuNy0xOS44LTc1LjMtNzUuNS01OS40LTEyMy44czE3LjUtMzIuMiwzNC40LTM5LjUsMjguNy00LjYsNDMuMy0uOGM5LjQsMy41LDE4LjYsNy45LDI3LjIsMTIuNSwwLDExLjYuOSwyMS4zLDIuMywzMy40bC0zMi41LTguOGMtOS44LTIuNi0xOS43LTEuMi0yOC42LDMuMS0xNS4yLDcuNC0xNi4xLDI0LjYtMTIuMyw0MS44LDIuNi05LjEsMy4xLTE3LDcuNy0yNC4zczcuOS05LjEsMTQuNS0xMC4yWiIgZmlsbD0iIzFhMWExYSIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03MDcuMyw1MTEuOWM3LjYtMTAuNSwyMC45LTI0LjEsMzIuNC0yMi43LDEwLjQsMS4zLDE0LjcsMTAuOSwyMC4zLDkuOS0zLjEtNS41LTYuMS05LjctMTAuMS0xMy45LTE4LTEwLjItMzEuOCwyLjYtNDUuNywxNi4ybC0xNS45LTM1LjNjNi4xLTYuOSwxMy4xLTEzLDIxLjMtMTcuNiwxNS44LTguOCwzNS4zLTcuOSw0OS4yLDMuNSwyMy41LDE5LjMsMzIuNCw0Ny44LDMyLjYsNzcuOCwwLDEzLjYtLjksMjUuOS01LjksMzguNS05LjQsMjMuNC0zMC44LDM5LTU2LjcsMzkuOWwtNy41LTQzLjZjLTMuMS0xOC4yLTgtMzUtMTMuOS01Mi44WiIgZmlsbD0iIzFhMWExYSIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02ODEuNCw0ODIuM2MxMC45LDI0LjcsMTguNyw0OS4zLDIzLjYsNzYuNS04LjQtMjguNy0xOC4yLTU3LjUtMzIuOC04NC43LTEyLjEtMjIuNi0yOC42LTQwLjItNDkuMy01NS0yMy42LTE2LjgtNTAuMy0yNy44LTc5LjUtMzAuMS0zLS4yLTYtMS40LTguNS0yLjYsMjAtMi4zLDQ1LjgsMy40LDY0LjEsMTEuNywzNy43LDE3LDY1LjMsNDUuOCw4Mi40LDg0LjNaIiBmaWxsPSIjMWExYTFhIi8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTMxNi4zLDUwMS42Yy03LjMsMi42LTEzLjYtMi44LTE0LjEtOS44LTEuMi0xOS4xLDI1LjYtMzcuOSwzNC44LTI4LjQsOC4zLDguNy0yLjYsMzEuOC0yMC43LDM4LjNaIiBmaWxsPSIjMWExYTFhIi8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTU5OC43LDQyMi43Yy0yLjgsMS42LTYuMi0uNS03LjctMy4ycy0uOC01LjksMS44LTcuNiw2LS4yLDcuOCwyLDIuMyw2LjQtMS45LDguOFoiIGZpbGw9IiMxYTFhMWEiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjk4LjYsNTIwLjRjLTEuMS0uMy0yLjYtMi45LTIuNy00czEtNC41LDIuNC01YzIuNS0uOCw1LjYsMS40LDUuNSwzLjhzLTIuNCw2LTUuMiw1LjFaIiBmaWxsPSIjMWExYTFhIi8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTU3OS4zLDQxNy41Yy0yLjQuNy00LjUtMi40LTQuOC00LjJzMi44LTUuMSw1LjQtNC4yLDIuNywzLjEsMi42LDQuNC0xLjgsMy42LTMuMyw0WiIgZmlsbD0iIzFhMWExYSIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNDcuNSw0NjAuMWMxLjQtLjYsNC40LDEuMiw0LjYsMi41cy0uOSw0LjctMi41LDUuNS00LjMtLjYtNS4xLTMsLjYtNCwzLTVaIiBmaWxsPSIjMWExYTFhIi8+CiAgPHBhdGggZD0iTTQzOC41LDY0My43Yy0yMC0uOS0yOC44LTQ4LjYtMTIuOC01OS4xLDUuNC0zLjYsMTIuOC0uOSwxNi43LDQuMiwxNi44LDIxLjksMTAuNyw1NS41LTMuOSw1NC45WiIgZmlsbD0iIzFhMWExYSIvPgogIDxwYXRoIGQ9Ik0zNzAuMiw1ODUuM2MtMywuNi01LjYtNC44LTQuOS03LjgsMS40LTUuNyw0LjMtOS4zLDkuMS0xMi4yczEyLjUtNi45LDE5LjktN2wzMS44LS4zYzE2LjctLjIsMjMuMS0xNS43LDI3LjYtNi40LDEuMSwxMS41LTYuNSwyMS0xNy43LDIzLjUtNy4xLDEuNy0xMy44LDEuNC0yMS4xLDEuNGgtMjEuNGMtOC42LDAtMTUuOCwzLjctMjMuMyw4LjlaIiBmaWxsPSIjMWExYTFhIi8+CiAgPHBhdGggZD0iTTYwMi4zLDYwMi43Yy0xOC40LDIuOC0zMC40LTUzLjctMTIuMS02MCwxNi4zLTUuNiwyNy41LDIzLjksMjMuMiw0Ni43LTEsNS41LTQuNiwxMi4yLTExLjEsMTMuMloiIGZpbGw9IiMxYTFhMWEiLz4KICA8cGF0aCBkPSJNNTkzLjksNDk2LjFjLTI0LS4yLTMxLjcsMjMuOS0zNi4yLDI3LjgtLjkuOC00LjItLjMtNC45LTEuMi02LjEtNy42LDYuNC0zMi4xLDI1LTM5LjksMTYuOC03LjEsMzctLjYsNDcsMTQuNSwyLjQsMy42LTEuNyw5LjItNC44LDEwLjYtNy44LTUuNy0xNS45LTExLjYtMjYuMS0xMS43WiIgZmlsbD0iIzFhMWExYSIvPgogIDxwYXRoIGQ9Ik01NTcuNCw3NjEuOWwtMTMsMTIuNmMtLjguOC0zLjctLjgtMy45LTEuOC0xLjMtOC41LDE1LjEtMjMuMSwyNC42LTMwLjYsMTAuNS04LjIsMjEuNi0xNC42LDM0LjYtMTguM2wxNC40LTJjMS43LS4yLDMuNywzLjEsMy42LDQuOHMtMi42LDMuOC00LjksNC4zYy0yMS42LDQuNi0zOS41LDE1LjQtNTUuNSwzMVoiIGZpbGw9IiMxYTFhMWEiLz4KICA8cGF0aCBkPSJNNTMwLjYsNjY3LjNjLTcsMS40LTIwLjctLjQtMjUtMy45cy0zLjMtMTAtLjMtMTIuOWM2LjktNi44LDE3LjItNS41LDI0LjIsMHM5LjQsNy42LDEwLjksMTQuOWwtOS44LDEuOVoiIGZpbGw9IiMxYTFhMWEiLz4KICA8cGF0aCBkPSJNNTc0LjYsNjMyLjhjNS41LDQuNy00LjgsMjEuMy0xNS44LDI3LjEtMy40LTkuMSwxLTIzLjIsOS41LTI3LjdzNS4yLS4zLDYuNC42WiIgZmlsbD0iIzFhMWExYSIvPgogIDxwYXRoIGQ9Ik01NzEuNiw3MDUuNWwtLjYsM2MtLjEuNy0yLjMtLjMtMi45LS43LTcuOS0xMi45LTEzLjEtMjYuNy0xNS44LTQxLjguMi0uNywxLjYtMy40LDIuMS0yLjlsMi4zLDIuMmM0LjEsMTMuOSw4LjgsMjYuOCwxNC45LDQwLjJaIiBmaWxsPSIjMWExYTFhIi8+CiAgPHBhdGggZD0iTTU4Myw3NzIuOGMtLjgtLjMtMi44LTEuNy0yLjUtMi4zczEuMy0yLjcsMi4yLTMuNGwyMC40LTE2LjNjMi4zLDcuOS0xMS45LDE2LjItMjAuMSwyMi4xWiIgZmlsbD0iIzFhMWExYSIvPgogIDxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik01NjIsNjE5LjVjLS41LDIuMyw2LjgsMCw5LjIsMy4xbC0xNC45LS42LDEuNy0yLjVjLjMtLjUtMS0xLjMtMi44LTIuNmw3LjUtLjctLjcsMy4xWiIgZmlsbD0iIzFhMWExYSIvPgo8L3N2Zz4=";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();
    if (!email) {
      return new Response(JSON.stringify({ error: "Email required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error } = await supabase.from("waitlist").insert({ email });

    if (error) {
      if (error.code === "23505") {
        return new Response(JSON.stringify({ already_joined: true }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error(error.message ?? JSON.stringify(error));
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "GarlicMonkey <noreply@garlicmonkey.app>",
        to: email,
        subject: "You're on the waitlist, Founding Chef!",
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>You're on the GarlicMonkey waitlist</title>
</head>
<body style="margin:0;padding:0;background-color:#F0EDE5;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F0EDE5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#F9F7F2;border:1px solid #E6E2D3;box-shadow:4px 4px 0 #E6E2D3;">

          <!-- Header -->
          <tr>
            <td style="background-color:#1a1a1a;padding:32px 40px;text-align:center;">
              <img src="data:image/svg+xml;base64,${LOGO_B64}" alt="GarlicMonkey" width="64" height="72" style="display:block;margin:0 auto 14px;filter:invert(1);">
              <p style="margin:0;color:#ffffff;font-size:20px;font-style:italic;letter-spacing:-0.3px;">GarlicMonkey</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 48px 32px;">
              <h1 style="margin:0 0 6px;color:#B35C1E;font-size:26px;font-weight:700;line-height:1.2;">You're in, Founding Chef!</h1>
              <hr style="border:none;border-top:2px solid #E6E2D3;margin:20px 0 24px;">
              <p style="margin:0 0 16px;color:#1a1a1a;font-size:16px;line-height:1.65;">
                You've secured a spot on the GarlicMonkey waitlist &mdash; and that means something. You're among the first in line when we open the kitchen.
              </p>
              <p style="margin:0 0 24px;color:#1a1a1a;font-size:16px;line-height:1.65;">
                Here's what's coming your way as a Founding Chef:
              </p>

              <!-- Benefits list -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td style="padding:11px 0;border-bottom:1px solid #E6E2D3;">
                    <span style="color:#B35C1E;font-weight:700;margin-right:10px;">&#10022;</span>
                    <span style="color:#1a1a1a;font-size:15px;">Early access to Chapter 1 before public launch</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:11px 0;border-bottom:1px solid #E6E2D3;">
                    <span style="color:#B35C1E;font-weight:700;margin-right:10px;">&#10022;</span>
                    <span style="color:#1a1a1a;font-size:15px;">Behind-the-scenes updates as we build</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:11px 0;">
                    <span style="color:#B35C1E;font-weight:700;margin-right:10px;">&#10022;</span>
                    <span style="color:#1a1a1a;font-size:15px;">Founding Chef status &mdash; locked in, forever</span>
                  </td>
                </tr>
              </table>

              <!-- Tagline blockquote -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-left:3px solid #B35C1E;padding:14px 20px;background-color:#FDF9F3;">
                    <p style="margin:0;color:#3a3a3a;font-size:16px;font-style:italic;line-height:1.55;">
                      &ldquo;Stop following recipes. Start understanding food.&rdquo;
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#F0EDE5;padding:18px 48px;border-top:1px solid #E6E2D3;text-align:center;">
              <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:13px;">
                <a href="https://garlicmonkey.app" style="color:#888;text-decoration:none;">garlicmonkey.app</a>
              </p>
              <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#aaa;">
                You received this because you signed up at garlicmonkey.app
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
      }),
    });
    if (!resendRes.ok) {
      const resendError = await resendRes.text();
      throw new Error(`Resend error: ${resendError}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Waitlist function error:", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
