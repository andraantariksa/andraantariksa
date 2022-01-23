---
title: "You Should Upgrade Your SSH Key to Ed25519"
date: "2022-01-14"
is_published: false
---

Ed25519 is now the recommended public key algorithm to use as of today. Ed25519 is faster and

## Generating the Key

```
ssh-keygen -o -t ed25519 -f ~/.ssh/id_ed25519 -C "john@example.com"
```

Additionally, you can add `-a` flag

---

References

- https://medium.com/risan/upgrade-your-ssh-key-to-ed25519-c6e8d60d3c54
- https://man.openbsd.org/ssh-keygen.1
