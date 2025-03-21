<h3 align="center"><img width="80" alt="Forkware.com, The Personal Cloud Computer: All your files, apps, and games in one place accessible from anywhere at any time." src="https://assets.forkware.site/forkware-logo.png"></h3>

<h3 align="center">The Internet OS! Free, Open-Source, and Self-Hostable.</h3>

<p align="center">
    <a href="https://forkware.com/?ref=github.com"><strong>« LIVE DEMO »</strong></a>
    <br />
    <br />
    <a href="https://forkware.com/?ref=github.com">Forkware.com</a>
    ·
    <a href="https://forkware.com/app/app-center">App Store</a>
    ·
    <a href="https://docs.forkware.com" target="_blank">SDK</a>
    ·
    <a href="https://github.com/forkware/forkware-cli" target="_blank">CLI</a>
    ·
    <a href="https://discord.com/invite/forkware">Discord</a>
    ·
    <a href="https://reddit.com/r/forkware">Reddit</a>
    ·
    <a href="https://twitter.com/HeyForkware">X</a>
</p>

<h3 align="center"><img width="800" style="border-radius:5px;" alt="screenshot" src="https://assets.forkware.site/forkware.com-screenshot.webp"></h3>

<br/>

## Forkware

Forkware is an advanced, open-source internet operating system designed to be feature-rich, exceptionally fast, and highly extensible. Forkware can be used as:

- A privacy-first personal cloud to keep all your files, apps, and games in one secure place, accessible from anywhere at any time.
- A platform for building and publishing websites, web apps, and games.
- An alternative to Dropbox, Google Drive, OneDrive, etc. with a fresh interface and powerful features.
- A remote desktop environment for servers and workstations.
- A friendly, open-source project and community to learn about web development, cloud computing, distributed systems, and much more!

<br/>

## Getting Started

### 💻 Local Development

```bash
git clone https://github.com/forkware/forkware
cd forkware
npm install
npm start
```
✨ This should launch Forkware at 
<font color="red"> http://forkware.localhost:4100 (or the next available port). </font>



If this does not work, see [First Run Issues](./doc/self-hosters/first-run-issues.md) for
troubleshooting steps.

<br/>

### 🐳 Docker

```bash
mkdir forkware && cd forkware && mkdir -p forkware/config forkware/data && sudo chown -R 1000:1000 forkware && docker run --rm -p 4100:4100 -v `pwd`/forkware/config:/etc/forkware -v `pwd`/forkware/data:/var/forkware  ghcr.io/forkware/forkware
```
✨ This should launch Forkware at 
<font color="red"> http://forkware.localhost:4100 (or the next available port). </font>

<br/>

### 🐙 Docker Compose

#### Linux/macOS

```bash
mkdir -p forkware/config forkware/data
sudo chown -R 1000:1000 forkware
wget https://raw.githubusercontent.com/forkware/forkware/main/docker-compose.yml
docker compose up
```
✨ This should be available at 
<font color="red"> http://forkware.localhost:4100 (or the next available port). </font>

<br/>

#### Windows

```powershell
mkdir -p forkware
cd forkware
New-Item -Path "forkware\config" -ItemType Directory -Force
New-Item -Path "forkware\data" -ItemType Directory -Force
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/forkware/forkware/main/docker-compose.yml" -OutFile "docker-compose.yml"
docker compose up
```
✨ This should launch Forkware at 
<font color="red"> http://forkware.localhost:4100 (or the next available port). </font>

<br/>

### 🚀 Self-Hosting

For detailed guides on self-hosting Forkware, including configuration options and best practices, see our [Self-Hosting Documentation](https://github.com/forkware/forkware/blob/main/doc/self-hosters/instructions.md).

<br/>

### ☁️ Forkware.com

Forkware is available as a hosted service at [**forkware.com**](https://forkware.com).

<br/>

## System Requirements

- **Operating Systems:** Linux, macOS, Windows
- **RAM:** 2GB minimum (4GB recommended)
- **Disk Space:** 1GB free space
- **Node.js:** Version 16+ (Version 23+ recommended)
- **npm:** Latest stable version

<br/>

## Support

Connect with the maintainers and community through these channels:

- Bug report or feature request? Please [open an issue](https://github.com/forkware/forkware/issues/new/choose).
- Discord: [discord.com/invite/forkware](https://discord.com/invite/forkware)
- X (Twitter): [x.com/HeyForkware](https://x.com/HeyForkware)
- Reddit: [reddit.com/r/forkware/](https://www.reddit.com/r/forkware/)
- Mastodon: [mastodon.social/@forkware](https://mastodon.social/@forkware)
- Security issues? [security@forkware.com](mailto:security@forkware.com)
- Email maintainers at [hi@forkware.com](mailto:hi@forkware.com)

We are always happy to help you with any questions you may have. Don't hesitate to ask!

<br/>

## License

This repository, including all its contents, sub-projects, modules, and components, is licensed under [AGPL-3.0](https://github.com/forkware/forkware/blob/main/LICENSE.txt) unless explicitly stated otherwise. Third-party libraries included in this repository may be subject to their own licenses.

<br/>

## Translations

- [Arabic / العربية](https://github.com/forkware/forkware/blob/main/doc/i18n/README.ar.md)
- [Armenian / Հայերեն](https://github.com/forkware/forkware/blob/main/doc/i18n/README.hy.md)
- [Bengali / বাংলা](https://github.com/forkware/forkware/blob/main/doc/i18n/README.bn.md)
- [Chinese / 中文](https://github.com/forkware/forkware/blob/main/doc/i18n/README.zh.md)
- [Danish / Dansk](https://github.com/forkware/forkware/blob/main/doc/i18n/README.da.md)
- [English](https://github.com/forkware/forkware/blob/main/README.md)
- [Farsi / فارسی](https://github.com/forkware/forkware/blob/main/doc/i18n/README.fa.md)
- [Finnish / Suomi](https://github.com/forkware/forkware/blob/main/doc/i18n/README.fi.md)
- [French / Français](https://github.com/forkware/forkware/blob/main/doc/i18n/README.fr.md)
- [German/ Deutsch](https://github.com/forkware/forkware/blob/main/doc/i18n/README.de.md)
- [Hebrew/ עברית](https://github.com/forkware/forkware/blob/main/doc/i18n/README.he.md)
- [Hindi / हिंदी](https://github.com/forkware/forkware/blob/main/doc/i18n/README.hi.md)
- [Hungarian / Magyar](https://github.com/forkware/forkware/blob/main/doc/i18n/README.hu.md)
- [Indonesian / Bahasa Indonesia](https://github.com/forkware/forkware/blob/main/doc/i18n/README.id.md)
- [Italian / Italiano](https://github.com/forkware/forkware/blob/main/doc/i18n/README.it.md)
- [Japanese / 日本語](https://github.com/forkware/forkware/blob/main/doc/i18n/README.jp.md)
- [Korean / 한국어](https://github.com/forkware/forkware/blob/main/doc/i18n/README.ko.md)
- [Malayalam / മലയാളം](https://github.com/forkware/forkware/blob/main/doc/i18n/README.ml.md)
- [Polish / Polski](https://github.com/forkware/forkware/blob/main/doc/i18n/README.pl.md)
- [Portuguese / Português](https://github.com/forkware/forkware/blob/main/doc/i18n/README.pt.md)
- [Romanian / Română](https://github.com/forkware/forkware/blob/main/doc/i18n/README.ro.md)
- [Russian / Русский](https://github.com/forkware/forkware/blob/main/doc/i18n/README.ru.md)
- [Spanish / Español](https://github.com/forkware/forkware/blob/main/doc/i18n/README.es.md)
- [Swedish / Svenska](https://github.com/forkware/forkware/blob/main/doc/i18n/README.sv.md)
- [Tamil / தமிழ்](https://github.com/forkware/forkware/blob/main/doc/i18n/README.ta.md)
- [Telugu / తెలుగు](https://github.com/forkware/forkware/blob/main/doc/i18n/README.te.md)
- [Thai / ไทย](https://github.com/forkware/forkware/blob/main/doc/i18n/README.th.md)
- [Turkish / Türkçe](https://github.com/forkware/forkware/blob/main/doc/i18n/README.tr.md)
- [Ukrainian / Українська](https://github.com/forkware/forkware/blob/main/doc/i18n/README.ua.md)
- [Urdu / اردو](https://github.com/forkware/forkware/blob/main/doc/i18n/README.ur.md)
- [Vietnamese / Tiếng Việt](https://github.com/forkware/forkware/blob/main/doc/i18n/README.vi.md)
