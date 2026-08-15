# Project Submission Report

## 1. Student Details

- **Full Name:** Eeshan Vaghjiani
- **Admission Number:** 166981
- **GitHub Username:** Eeshan-Vaghjiani
- **Email:** eeshan.vaghjiani@strathmore.edu
- **Profile** https://github.com/Eeshan-Vaghjiani
---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/library-management-166981/
- **Repository URL:** https://github.com/IS-PROJECT-2026/library-management-166981

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

- **Commit URL:** https://github.com/IS-PROJECT-2026/library-management-166981/commit/0420ac58b7426638d52ca181a30dcdb0db6f8c74
- **Why this one?** This commit follows the conventional `feat(books)` type with a clear, descriptive subject "add catalog management", directly addressing Issue #5. It demonstrates focused implementation with proper scoping and maintains clean git history through atomic, purposeful changes.

### B. A Mistake or Struggle

Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke. 

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/library-management-166981/commit/16239f1bc11b678906c74a669f5b080371734cd2
- **What happened and how did you recover?** I intentionally created conflicting changes to footer spacing on two separate branches (one increasing padding, one decreasing it) to demonstrate merge conflict resolution. When attempting to merge, Git detected the simultaneous modifications and stopped the process with conflict markers. I carefully reviewed both versions in VS Code, chose the appropriate final spacing value, removed all conflict markers, and completed the merge with a proper resolution commit documenting the fix.

### C. A Pull Request You're Proud Of

Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

- **PR URL:** https://github.com/IS-PROJECT-2026/library-management-166981/pull/14
- **What did you check before merging?** I reviewed the entire diff to ensure the book catalog management implementation was complete and properly structured, verified that PR #14 was correctly linked to Issue #5 with closure syntax in the description, tested all CRUD operations (add, delete, borrow/return books) and confirmed localStorage persistence worked correctly, and ensured no unrelated code changes or debugging artifacts were included in the final commit.

### D. One Thing You Would Do Differently

If you had to restart this project from scratch with everything you know now, name one specific workflow decision you would change (not a code change — a Git/project management decision).

- **What would you change?** I would establish smaller, more atomic commits from the very beginning of the project, ensuring that each commit represents one clear, focused development step (such as "add book form HTML" separate from "add book form validation" separate from "connect form to state"). This would make the git history easier to review, debug individual features, and potentially cherry-pick or revert specific functionality without affecting other components.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/library-management-166981/commit/acac8eb0d48c6540f6f08d86969074c9400b8177

---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.

> **CRITICAL FOR WORKING IMAGES:** Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and **paste (Ctrl+V / Cmd+V)** your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

### A. Milestones and Issues
*Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.*

<table>
<tr>
<td width="50%">

**Before**
<img width="1519" height="542" alt="milestone-before" src="https://github.com/user-attachments/assets/02fc1e41-1146-4552-ac2b-b6d6cf0dfa24" />
*Initial milestone setup showing early project planning phase*

</td>
<td width="50%">

**After**

<img width="1007" height="352" alt="milestone-after" src="https://github.com/user-attachments/assets/a10a1fa6-acba-4a24-8752-7412128ba341" />


*Completed milestones with all linked issues closed*

</td>
</tr>
</table>

### B. Project Board
*Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).*

<table>
<tr>
<td width="50%">

**Before**

<img width="690" height="693" alt="project kannban-before" src="https://github.com/user-attachments/assets/07cb78d5-3a3a-49c6-b7d5-29c5aefd8dba" />


*Initial Kanban board with tasks in To Do column*

</td>
<td width="50%">

**After**

<img width="873" height="860" alt="project-kanban-final" src="https://github.com/user-attachments/assets/7224abd5-9ef5-497b-8cbc-6cdf9d22ccb9" />


*Completed board showing all tasks moved to Done*

</td>
</tr>
</table>

### C. Branching Architecture
*Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., `feat/`, `fix/`, `style/`).*

<img width="1331" height="766" alt="No Name! (972)" src="https://github.com/user-attachments/assets/df153b2a-4741-4a04-9205-15e47e09d049" />


* **Caption:** list of development branches
### D. Pull Requests & Traceability
*Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.*

<img width="1246" height="889" alt="No Name! (973)" src="https://github.com/user-attachments/assets/8849efd2-9932-4af4-806d-cf78437c821b" />

*Closed issues with linked PRs and traceability*

---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?** Simultaneous modification of the same lines on different branches (Classic Line-Level Conflict)

#### Step 1: Generating the Clash
*Screenshot showing the merge attempt and the conflict warning.*

<img width="876" height="369" alt="conflict1_attempt" src="https://github.com/user-attachments/assets/0219a49f-1d73-413d-8f07-ed0c07376d12" />


* **Caption:** Merge attempt between feature branches showing Git conflict warning when trying to merge conflicting changes

#### Step 2: Inside the Code Editor (Conflict Markers)
*Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor.*

<img width="1129" height="256" alt="conflict1_markers" src="https://github.com/user-attachments/assets/14da3a2d-bfaa-455e-a62f-0abb2cae21d0" />


* **Caption:** Raw conflict markers visible in VS Code editor showing HEAD vs incoming changes that modified the same code section

#### Step 3: Resolution & Clean Merge
*Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.*

<img width="1050" height="331" alt="conflict1_resolved" src="https://github.com/user-attachments/assets/1445eea8-a384-47ab-b9b0-59b411d9e823" />


* **Caption:** Clean merge completion showing conflict resolution commit successfully integrated into main branch

---

### Conflict 2 — Different Cause

**What cause did you use?** Divergent changes to adjacent code sections (Proximity Conflict)

**Why does this cause trigger a conflict?** When two branches modify code sections that are very close to each other (even if not the exact same lines), Git may not be able to automatically determine the correct merge order or context. This causes Git to flag a conflict because the changes are contextually interdependent and require human judgment to resolve correctly.

<img width="1188" height="248" alt="conflict2_markers" src="https://github.com/user-attachments/assets/b6f684bc-02c3-4349-8f0a-6f1b3ca34747" />


* **Caption:** Second merge conflict showing different conflict cause with distinct branches modifying overlapping code sections

<img width="1021" height="354" alt="conflict2_resolved" src="https://github.com/user-attachments/assets/4907ac40-f708-45d6-b2b5-67ffb5c51e54" />


* **Caption:** Conflict 2 successfully resolved and merged with clean commit history

---

### Conflict 3 — Different Cause

**What cause did you use?** File modification vs. deletion conflict (Structural Conflict)

**Why does this cause trigger a conflict?** This occurs when one branch modifies a file while another branch deletes the same file entirely. Git cannot automatically decide whether to keep the modified version or honor the deletion, requiring manual intervention to determine whether the file should exist in the final merge and in what state.

<img width="1204" height="188" alt="conflict3_markers" src="https://github.com/user-attachments/assets/5b891856-79e9-47e2-988f-eebe4cafe04e" />


* **Caption:** Third merge conflict demonstrating yet another conflict scenario with different root cause from previous conflicts

<img width="971" height="645" alt="conflict3_resolved" src="https://github.com/user-attachments/assets/cba64f5a-50d2-482f-b8f4-f4ba9b4746cf" />


* **Caption:** Conflict 3 successfully resolved and merged with proper conflict resolution workflow

---
##
## 6. Feedback & Evaluation

To help improve this course for future engineering cohorts, please take 2 minutes to fill out the anonymous feedback form. Your honest review helps shape how this program is taught next semester!
- [✓] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---
 
## Final Submission
 
Once your repository is complete, submit your work through the official submission form below. The form will **stop accepting responses after Monday, August 17th, 2026** — no late submissions will be accepted.
 
> **Submission Form:** [https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)
