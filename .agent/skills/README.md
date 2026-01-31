# Antigravity Skills Guide

Skills are specialized instruction sets that help Antigravity agents perform complex tasks with consistency and precision. A skill is defined by a directory containing a `SKILL.md` file.

## How to Create a Skill

1.  Create a folder in `.agent/skills/` with your skill name (e.g., `.agent/skills/deploy_check/`).
2.  Create a `SKILL.md` file inside that folder.
3.  Add YAML frontmatter and detailed markdown instructions.

## Directory Structure

```
.agent/
  skills/
    template/
      SKILL.md
    deploy_check/
      SKILL.md
      scripts/
        verify.sh
    code_style/
      SKILL.md
      resources/
        style_guide.txt
```

## Using Skills

To use a skill, simply ask Antigravity to perform the task associated with the skill. For example:
> "Please run the deployment check skill."

The agent will look for `.agent/skills/deploy_check/SKILL.md`, read the instructions using `view_file`, and then execute them.

## Skill Definition Format (SKILL.md)

See `.agent/skills/template/SKILL.md` for a complete example.
