const companyCybersecurityTools = [
  { category: "Firewalls & UTMs", name: "Cisco ASA / Meraki", purpose: "Enterprise firewall and VPN" },
  { category: "Firewalls & UTMs", name: "Palo Alto PA-Series", purpose: "Advanced threat detection + AI firewall" },
  { category: "Firewalls & UTMs", name: "Fortinet FortiGate", purpose: "UTM with antivirus, IPS, filtering" },
  { category: "Firewalls & UTMs", name: "Sophos XGS Firewall", purpose: "High-speed firewall with SD-WAN support" },
  { category: "Firewalls & UTMs", name: "WatchGuard Firebox", purpose: "Mid-size business firewall/UTM" },
  { category: "Firewalls & UTMs", name: "SonicWall TZ/NSA Series", purpose: "Gateway security, DPI, VPN" },
  { category: "Firewalls & UTMs", name: "pfSense / OPNsense", purpose: "Open-source firewall (run on own hardware)" },
  { category: "Firewalls & UTMs", name: "Ubiquiti EdgeRouter", purpose: "Affordable SMB firewall with VLAN, VPN" },

  { category: "Intrusion Detection/Monitoring", name: "Cisco Firepower", purpose: "Integrated firewall + IDS/IPS" },
  { category: "Intrusion Detection/Monitoring", name: "Snort / Suricata (on appliance)", purpose: "Signature-based IDS/IPS" },
  { category: "Intrusion Detection/Monitoring", name: "Gigamon TAP Aggregator", purpose: "Traffic mirroring for analysis" },
  { category: "Intrusion Detection/Monitoring", name: "Security Onion", purpose: "NIDS/SIEM system for forensic analysis" },

  { category: "Authentication & Access", name: "Smart Card Readers", purpose: "Secure login via smartcards" },
  { category: "Authentication & Access", name: "HID Proximity Card Systems", purpose: "Employee badge-based access control" },
  { category: "Authentication & Access", name: "Biometric Terminals", purpose: "Facial/Fingerprint physical access" },
  { category: "Authentication & Access", name: "YubiKeys for Staff", purpose: "MFA for enterprise platforms" },
  { category: "Authentication & Access", name: "PKI USB Tokens", purpose: "Secure document signing & login" },
  { category: "Authentication & Access", name: "HSMs", purpose: "Hardware key management, root of trust" },

  { category: "Behavior & AI Threat Detection", name: "Darktrace Antigena", purpose: "AI-powered network behavior analysis" },
  { category: "Behavior & AI Threat Detection", name: "Vectra AI", purpose: "Machine learning for detecting insider threats" },
  { category: "Behavior & AI Threat Detection", name: "Cisco SecureX", purpose: "Integrates threat intelligence across platforms" },
  { category: "Behavior & AI Threat Detection", name: "IBM QRadar / Splunk Appliance", purpose: "SIEM platform for log correlation & alerts" },

  { category: "One-Way Communication Tools", name: "Owl Cyber Defense Data Diode", purpose: "Secure unidirectional data flow" },
  { category: "One-Way Communication Tools", name: "BAE Systems Data Diode", purpose: "Critical infrastructure data protection" },
  { category: "One-Way Communication Tools", name: "Cross Domain Solution (CDS)", purpose: "Secure transfer between classified zones" },

  { category: "Physical-Cyber Integration", name: "CCTV DVRs w/ cyber alerts", purpose: "Video + network event triggers" },
  { category: "Physical-Cyber Integration", name: "Smart Access Panels", purpose: "Linked physical and cyber authentication" },
  { category: "Physical-Cyber Integration", name: "Secure KVM Switches", purpose: "Prevent input/output leaks between systems" },

  { category: "Endpoint Security Hardware", name: "Intel vPro / AMD PRO", purpose: "Secure BIOS + remote management" },
  { category: "Endpoint Security Hardware", name: "Hardware-Enforced Secure Boot", purpose: "TPM + UEFI lockdown on systems" },
  { category: "Endpoint Security Hardware", name: "Chromebooks w/ Titan C", purpose: "Verified boot, tamper-resistant firmware" },
  { category: "Endpoint Security Hardware", name: "Dell SafeBIOS / HP SureStart", purpose: "OEM-level BIOS protection" },
  { category: "Endpoint Security Hardware", name: "USB Port Blockers", purpose: "Prevent unauthorized USB device usage" },

  { category: "Specialized Hardware", name: "Red Balloon Symbiote", purpose: "Embedded device firmware protection" },
  { category: "Specialized Hardware", name: "SentryBay Endpoint", purpose: "Secure VDI session endpoint device" },
  { category: "Specialized Hardware", name: "McAfee MVISION EDR", purpose: "Hardware-accelerated endpoint protection" },
  { category: "Specialized Hardware", name: "Nexthink Hardware Sensor", purpose: "Endpoint analytics and behavioral data" },

  { category: "Encrypted Communication Devices", name: "Cisco / Avaya Encrypted Phones", purpose: "Secure voice communication" },
  { category: "Encrypted Communication Devices", name: "BlackBerry UEM Devices", purpose: "Enterprise mobile threat defense" },
  { category: "Encrypted Communication Devices", name: "Silent Circle Solutions", purpose: "Government-grade secure calling" },

  { category: "Other Infrastructure", name: "Air-gapped backup hardware", purpose: "Isolated disaster recovery backups" },
  { category: "Other Infrastructure", name: "Ledger Enterprise Wallet", purpose: "Cold storage wallets for business crypto" },
  { category: "Other Infrastructure", name: "Faraday Cages", purpose: "Protect devices from external signals" },
  { category: "Other Infrastructure", name: "PoE Isolation", purpose: "Segmenting IoT from critical network" }
];

const generalCybersecurityTools = [
  { category: "Authentication & Access Control", name: "YubiKey", purpose: "Physical 2FA (USB-C, NFC, Lightning)" },
  { category: "Authentication & Access Control", name: "Google Titan Key", purpose: "Hardware MFA key for Google ecosystem" },
  { category: "Authentication & Access Control", name: "Feitian BioPass K27", purpose: "Fingerprint + 2FA security" },
  { category: "Authentication & Access Control", name: "Nitrokey FIDO2", purpose: "Secure passwordless login" },
  { category: "Authentication & Access Control", name: "Trezor / Ledger Nano", purpose: "Cold storage for crypto + hardware authentication" },
  { category: "Authentication & Access Control", name: "OnlyKey", purpose: "Multi-function 2FA + password manager" },

  { category: "Biometric Devices", name: "Kensington VeriMark", purpose: "USB fingerprint scanner" },
  { category: "Biometric Devices", name: "Windows Hello IR Camera", purpose: "Secure facial recognition login" },
  { category: "Biometric Devices", name: "IRISGuard iCAM", purpose: "Iris biometric scanner (advanced privacy)" },

  { category: "Encrypted Storage Devices", name: "Apricorn Aegis Secure Key", purpose: "PIN-protected USB storage" },
  { category: "Encrypted Storage Devices", name: "Kingston IronKey D300", purpose: "Military-grade encrypted USB stick" },
  { category: "Encrypted Storage Devices", name: "iStorage datAshur PRO2", purpose: "AES-XTS 256-bit encrypted USB key" },
  { category: "Encrypted Storage Devices", name: "Samsung T7 Touch SSD", purpose: "Fingerprint + encrypted external SSD" },

  { category: "Privacy-Focused Devices", name: "Librem 5 Phone", purpose: "Linux smartphone focused on privacy" },
  { category: "Privacy-Focused Devices", name: "PinePhone", purpose: "Open-source mobile device" },
  { category: "Privacy-Focused Devices", name: "Silent Circle Blackphone", purpose: "Encrypted Android communication" },
  { category: "Privacy-Focused Devices", name: "SkyECC / CryptoPhone", purpose: "Secure call & SMS devices (niche market)" },

  { category: "Home Network Protection", name: "Firewalla Gold / Red", purpose: "Plug-and-play home firewall" },
  { category: "Home Network Protection", name: "CUJO AI Smart Firewall", purpose: "IoT and parental protection" },
  { category: "Home Network Protection", name: "Bitdefender BOX 2", purpose: "IoT security for home networks" },
  { category: "Home Network Protection", name: "Netgear Armor Routers", purpose: "Router-integrated security (by Bitdefender)" },
  { category: "Home Network Protection", name: "Pi-hole on Raspberry Pi", purpose: "DNS-level ad/malware blocking" },

  { category: "Pentesting & Red Team Tools", name: "Hak5 WiFi Pineapple", purpose: "Wireless auditing / MITM" },
  { category: "Pentesting & Red Team Tools", name: "Hak5 Bash Bunny", purpose: "USB-based payload delivery" },
  { category: "Pentesting & Red Team Tools", name: "Hak5 Rubber Ducky", purpose: "Keystroke injection disguised as USB" },
  { category: "Pentesting & Red Team Tools", name: "Flipper Zero", purpose: "Hacking tool: RFID, IR, NFC, Bluetooth, GPIO" },
  { category: "Pentesting & Red Team Tools", name: "Proxmark3 Easy", purpose: "RFID/NFC sniffing and cloning" },
  { category: "Pentesting & Red Team Tools", name: "O.MG Cable", purpose: "Malicious cable that executes scripts on plug-in" },
  { category: "Pentesting & Red Team Tools", name: "Raspberry Pi 4 w/ Kali Linux", purpose: "Full-feature portable pentest lab" },
  { category: "Pentesting & Red Team Tools", name: "ESP32 Marauder", purpose: "Wi-Fi & Bluetooth scanning/hacking tool" },
  { category: "Pentesting & Red Team Tools", name: "Alfa AWUS036ACH", purpose: "Long-range Wi-Fi adapter (monitor mode)" },

  { category: "USB & Data Protection", name: "USB Condom", purpose: "Blocks data pins during public charging" },
  { category: "USB & Data Protection", name: "PortaPow Data Blocker", purpose: "Safe USB charging without data access" },
  { category: "USB & Data Protection", name: "USBKill Switch", purpose: "Kills computer when USB is pulled or inserted" },

  { category: "Learning & DIY", name: "Raspberry Pi Zero / 4", purpose: "Custom security tools (IDS, honeypot, VPN server)" },
  { category: "Learning & DIY", name: "Arduino + NRF24L01", purpose: "DIY wireless sniffing/jamming projects" },
  { category: "Learning & DIY", name: "USB Armory MkII", purpose: "ARM-based secure computing stick" },
  { category: "Learning & DIY", name: "BeagleBone Black", purpose: "Embedded Linux board for secure dev" }
];

export {
  generalCybersecurityTools,
  companyCybersecurityTools
};