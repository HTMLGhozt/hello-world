# Enterprise "Hello, World!"

## Generalized Goals

### Client/server communication
- [ ] Use flatbuffers
	- [ ] Stretch: Rust
- [ ] Use GraphQL
- [ ] Inter-server communication via gRPC

### Data Storage
- [ ] Use a Graph Database for storing the text
	- [ ] should seed as "Hello, World!"
	- [ ] each text component in a different edge
- [ ] Efficient caching using Redis

### Admin Goals
- [ ] Have an Admin portal login 
	- [ ] email authentication
	- [ ] text auth
	- [ ] Password via bcrypt
	- [ ] bio auth via phone app?
	- [ ] GitHub, Google and LinkedIn Auth?
	- [ ] 2fa
- [ ] Account panel 
	- [ ] should have the ability submit new text
	- [ ] create new users (admin)
	- [ ] Change or approve text submissions (admin)
	- [ ] settings page
		- [ ] change password
		- [ ] phone number
		- [ ] email
		- [ ] disconnect logged-in webapps

### Best practices
- [ ] Testing
	- [ ] Unit
	- [ ] E2E
- [ ] CI/CD
- [ ] linting
- [ ] codecoverage

### Ethos
- [ ] Don't be adverse to utilizing common packages to apply industry design patterns
