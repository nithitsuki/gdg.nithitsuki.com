# GDG On Campus Selection Tasks

## About

This repository contains my submissions for the GDG on Campus selection at Amrita Vishwa Vidyapeetham, Bangalore.

## Tasks Chosen

- **1. Web Development**
- **6. DevOps and Cybersecurity**

---

## Problem Statements

### 1. Web Development

**Task:** Build a mini blogging platform with the following features:

- User registration/login system (basic authentication)
- Users can create, edit, and delete blog posts
- Each post must include a title, content, and timestamp
- Store data in a database (MySQL, MongoDB, Firebase, or any equivalent)

**Expected Deliverables:**

- Live deployed link (GitHub Pages, Netlify, Vercel, or any hosting)\
  **NOW LIVE AT [https://blog.gdg.nithitsuki.com/](https://blog.gdg.nithitsuki.com/)!!!**
- GitHub repository with code and README (including setup guide)\
  You're looking at it! The setup guide is in [`gdg-mini-blog/README.md`](gdg-mini-blog/README.md).
- At least minimal frontend styling (not plain HTML text)\
  rip google minimalism 😢

---

### 2. DevOps & Cybersecurity

#### Option A – DevOps: Automate Your Meme Factory

1. Pick any meme generator API (or even a static funny image)
2. Write a simple script/app (Python/Node.js) that overlays funny captions on the meme
3. Set up a GitHub Actions (or GitLab CI) pipeline that:
	- Runs automatically whenever a new caption idea (text/JSON file) is committed
	- Builds the meme with the new caption
	- Deploys it automatically to GitHub Pages / Netlify / a simple web server
	- **(Bonus):** Posts the meme link to Slack/Discord

**Expected Deliverables (DevOps):**

- Source code
  In the [`meme_generator` folder](./meme_generator/)
- Dockerfile
  You'll find it in the [root directory](./Dockerfile).
- Deployment configs (GitHub Actions / GitLab CI)\
  Right [this way](.github/workflows/meme-pipeline.yml)!
- Proof of deployment (public link or short demo video)\
  **NOW LIVE AT [https://meme.gdg.nithitsuki.com/](https://meme.gdg.nithitsuki.com/)!!!**
---

#### Option B – Cybersecurity: Capture the Flag (CTF)

1. Go to [picoCTF Practice](https://play.picoctf.org/practice)
2. Choose any 5 medium-level questions from any domain
3. Solve them and document your process
4. If the challenge involves vulnerable code, provide a fixed version of the snippet

So... about this one 😐🙏 turns out I bit more than I could chew as usual 😭

I unfortunately didn't get time to compile 5 write-ups for this submission.\
Work these days do be killing man (I'm sure _someone **(possibly someoe)**_ can relate )

For now, here are the questions I've solved on my PicoCTF account:
[play.picoctf.org/users/Nithitsuki](https://play.picoctf.org/users/Nithitsuki)

If it helps, I also bi0s sometimes.