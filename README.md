[![Resurgo.AI - Simulate deploy](../../actions/workflows/deploy.yml/badge.svg?branch=main&event=push)](../../actions/workflows/deploy.yml)

# **Resurgo.AI Outage Recovery Simulator: Pre-Alpha Demo**
## 🚀 Rebound from any outage, blazingly fast!

---

## **Overview**
💡 Ever faced a production outage? Imagine recovering from it before your team even finishes their first cup of coffee. Welcome to Resurgo.AI's Outage Recovery Simulator — an interactive demo showcasing how our AI copilot resolves outages faster than ever.

Here’s what you’ll experience:
- Simulate outages in a controlled environment.
- Watch *AI-driven Root Cause Analysis (RCA)* solve problems faster than ever.
- Discover how Resurgo.AI revolutionizes incident recovery for modern SaaS teams.

---

## **Why Try This?**
- 🚀 **Discover Cutting-Edge AI**: See Resurgo.AI tackle real-world outage scenarios.
- 🛠️ **Hands-On Learning**: Experiment, adapt, and explore outage simulation workflows.
- 🌟 **Be Part of the Future**: Shape the development of Resurgo.AI by sharing feedback.

---

## **How It Works**
This demo mimics real-world outages, identifies root causes using AI, and delivers recovery insights in GitHub pull requests.
- **Simulate Real-World Outages:** Introduce errors to mimic production failures.
- **Automated RCA by Resurgo.AI:** We use AI and Machine Learning to identify issues, reducing reliance on manual root cause analysis.
- **Get Rapid Insights:** Resurgo.AI provides RCA and recovery recommendations as comments on the GitHub commit that triggered the deployment.

---

## **Quick Start: Simulate Your First Outage**
Follow these steps to get started:

1. **Fork This Repository**
   [Click here to fork](https://github.com/resurgo-ai/outage-recovery-simulator-nodejs/fork) our demo and create a copy in your GitHub account. ⚠️ Disable the **"Copy the main branch only"** option to access pre-made outage examples ⚠️.
   - Forking allows you to run and modify the demo independently, preserving the original repository for reference.
   - Disable the **"Copy the main branch only"** option to access pre-made outage examples.

2. **Enable GitHub Actions**
   In *your fork*, navigate to the [Actions](../../actions) tab and enable workflows by clicking:
   `I understand my workflows, go ahead and enable them.`

3. **Simulate an Outage**
   Merge one of the example branches (e.g., `outage-db-configuration-error`) into the `main` branch to trigger an outage.
   - **Using GitHub Web Interface:** [Create a pull request](../../compare/main...outage-db-configuration-error) to merge `outage-db-configuration-error`.
   - **Using Command Line:**
     ```bash
     git clone git@github.com:${YOUR_USERNAME}/outage-recovery-simulator-nodejs.git
     cd outage-recovery-simulator-nodejs
     git checkout main && git rebase outage-db-configuration-error && git push
     ```

4. **Observe Automated RCA in Action**
   After pushing to `main`, the workflow will:
   - Simulate a deployment and alert Resurgo.AI.
   - Analyze logs and code changes.
   - Provide Root Cause Analysis and recovery recommendations in a GitHub comment on the latest commit.

4. **Reset the main branch and repeat**
   You can push changes many times and Resurgo.AI will treat each push as a separate deploy. Eventually, you might want to start from scratch or try another example branch, say `outage-sql-syntax-error`. You can always reset the `main` branch to it's original state which marked with the `safe-spot` tag:
     ```bash
     git reset --hard safe-spot
     git push --force origin main
     ```
   Don't worry about using `--force` on a demo app, our workflow will skip force push and will anticipate your next regular push.

5. **Troubleshooting**
    Should you encounter an issue with this demo, please check out the [wiki page](https://github.com/resurgo-ai/outage-recovery-simulator-nodejs/wiki) for troubleshooting tips or create an [issue](https://github.com/resurgo-ai/outage-recovery-simulator-nodejs/issues) in our tracker.

---

## **Scope of this Demo**
### **🔍 Current Focus**
This pre-alpha demo highlights Resurgo.AI's ability to handle **application-level errors** in **self-contained environments**:
- **Self-Inflicted Outages:** Simulates issues caused by code or configuration changes, which account for 60–80% of SaaS incidents.
- **Software-Level Errors:** Focuses on diagnosing bugs and misconfigurations within application code or database settings.
- **Simplified SaaS Application:** Uses a basic Flask app with user API functionality to prioritize demonstration of outage recovery workflows.

### **🚫 Limitations**
This version is a **proof of concept**, and certain scenarios are out of scope:
- **External Dependencies:** Outages caused by external factors are not currently considered.
- **Deployment Failures:** Failures during build or deploy stages (e.g., infrastructure misconfigurations) are not part of this demo but are planned for future releases.
- **Force Pushes Ignored:** RCA workflows are triggered by normal code pushes. Force pushes, such as branch resets, are intentionally skipped.
- **Workflow and Test File Modifications:** Changes to `.github/workflows/*`, `tests/user.py`, `LICENSE` or this `README.md` will prevent RCA.

---

## **The Bigger Picture**
**Problem:** Outage recovery is slow and stressful. Engineers manually sift through logs, correlate changes, and diagnose issues under pressure. It's costly, time-consuming and cognitively-taxing process.

Resurgo.AI automates this process, delivering actionable insights in minutes after outage detection, often before engineers even start looking at the issue. This offers:
- ⏱️ **Faster Recovery:** AI-driven RCA shortens downtime.
- 🧠 **Reduced Cognitive Load:** Focus on fixing issues, not finding them.
- 🤝 **Improved Team Collaboration:** Share insights seamlessly with stakeholders.

---

## **What’s Next?**
We’re building the future of AI-powered incident recovery, and you can be part of it!
- 📰 [**Subscribe**](https://resurgo.ai/#subscribe) for updates and exclusive previews.
- 💬 **Collaborate with us:** Interested in testing premium features or closer collaboration? [Email us](mailto:hello@resurgo.ai).

---

## **Feedback & Contribution**
Your feedback is invaluable. Let us know what works, what doesn’t, and what you’d like to see next!
- Submit issues or feature requests via GitHub.
- Reach out to us directly at [hello@resurgo.ai](mailto:hello@resurgo.ai).

---

## **Pre-Alpha Disclaimer**
This demo is a **proof of concept** for Resurgo.AI's outage recovery capabilities. Expect some rough edges, and feel free to report bugs or request features. The API supporting this pre-alpha demo will be maintained through March 2025.

For more product demos and updates, visit our [GitHub page](https://github.com/resurgo-ai/) and [website](https://resurgo.ai/).
