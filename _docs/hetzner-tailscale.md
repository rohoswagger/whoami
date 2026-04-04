---
title: "Hetzner VPS + Tailscale Setup"
date: "04-04-2026"
description: "Provision a Hetzner VPS, join it to a Tailnet, and lock down all public access."
---

## Provision the VPS

Buy a Hetzner VPS and SSH into it using the public IP they give you:

```bash
ssh user@<hetzner-vm-public-ip>
```

---

## Set up the VM

First thing on a fresh machine, run the setup script:

```bash
curl -fsSL https://raw.githubusercontent.com/rohoswagger/dotfile/main/setup.sh | bash
```

---

## Set up Tailscale

**Install:**

```bash
curl -fsSL https://tailscale.com/install.sh | sh
```

**Bring it up:**

```bash
sudo tailscale up
```

This should print a login link in the terminal. If it doesn't, try:

```bash
sudo tailscale login
```

If that hangs or never returns a link, use an auth key instead (generate one at tailscale.com → Settings → Keys):

```bash
sudo tailscale up --authkey=<your-auth-key>
```

**Enable Tailscale SSH:**

```bash
sudo tailscale set --ssh
```

**Verify:**

```bash
tailscale status
tailscale ip
```

You should see this node and all your other Tailnet devices listed. Note your Tailscale IP (a `100.x.x.x` address) — you'll need it at the end.

---

## Lock it down with UFW

**Install UFW:**

```bash
sudo apt-get update
sudo apt-get install ufw -y
```

**Deny all incoming, allow all outgoing:**

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

**Allow SSH only on the Tailscale interface:**

```bash
sudo ufw allow in on tailscale0 to any port 22
```

**Check the rules — there should be exactly one:**

```bash
sudo ufw status numbered
```

If there are any other entries from a previous UFW config, delete them:

```bash
sudo ufw delete <number>
```

**Enable:**

```bash
sudo ufw enable
sudo ufw reload
```

---

## Verify everything works

SSH to the **public IP** — this should hang or fail:

```bash
ssh user@<hetzner-vm-public-ip>   # ✗ should not work
```

SSH to the **Tailscale IP** from any device on your Tailnet — this should work:

```bash
ssh user@<tailscale-ip>           # ✓ should work
```

If public SSH is dead and Tailscale SSH is alive, you're done. The machine is now invisible to the public internet and only reachable through your Tailnet.
