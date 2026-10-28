# PROJECT #14: RADIAL SKILL GAME

Status: Concept / planning
Owner: Leterel
Created: 2026-10-28

## Vision

An original dark, provocative, satirical skill game built
around a fully closed circular playing field.

The player interacts with categories arranged around a complete
360-degree ring. The categories represent socially condemned
actions or crime-related themes as fictional or satirical content.

The purpose is to create an interesting game mechanic,
not to encourage or teach real-world wrongdoing.

## Core Design

- A true, fully closed circle
- Continuous 360-degree radial movement or selection
- Eight, sixteen or more directional segments
- Meaningful placement of neighboring categories
- Responsive and precise controls
- Timing, accuracy and skill-based challenges
- Clear feedback and progression
- Replayability
- Original visual identity

Avoid reducing the game to a conventional four-direction menu.

## Controls

Research support for:
- Mouse
- WASD
- Arrow keys
- Numeric keypad
- Xbox controllers
- PlayStation controllers

Possible input models:
- Continuous angular movement
- Discrete radial selection
- Analog-stick aiming
- Mouse-angle targeting
- Timing-based confirmation

The final input system has not been selected.

## Circle Geometry

Potential technical representation:

- Center point: (cx, cy)
- Radius: r
- Angle: theta
- Segment count: N
- Segment width: 360 / N degrees

Candidate approaches:
- Radial graph
- Segmented ring
- Circular skill tree
- Concentric rings
- Continuous angular targeting

All segments should connect logically around the full circle.

## Category Structure

Themes should have a deliberate conceptual ordering.

Possible design principles:
- Related themes occupy neighboring sectors
- Clear transitions between category groups
- Distinct colors, symbols or patterns
- Readable labels at different screen sizes
- No glorification or practical instruction for real crimes

Exact categories, number of sectors and relationships
remain open design decisions.

## Gameplay Research

Possible mechanics:
- Rotating pointer or cursor
- Timed selection windows
- Accuracy scoring
- Combo systems
- Increasing speed
- Pattern recognition
- Multi-ring challenges
- Reaction-time tasks
- Risk/reward choices
- Unlockable visual variations

Select a coherent core loop before adding complexity.

## User Interface

- Readable circular layout
- Strong visual hierarchy
- Smooth animation
- Clear active-sector highlighting
- Accessible contrast
- Adjustable sensitivity
- Input remapping where feasible
- Controller-friendly navigation
- Optional sound and haptic feedback

## Technical Candidates

Research:
- JavaScript / TypeScript
- Canvas 2D
- WebGL
- Godot
- Gamepad API
- SVG for interface prototypes

No engine or framework has been selected yet.

## Prototype Roadmap

1. Define the central gameplay loop
2. Choose the sector count and category logic
3. Build a mathematically correct closed circle
4. Implement mouse and keyboard input
5. Add controller input
6. Add timing and scoring
7. Add audiovisual feedback
8. Test usability and difficulty
9. Refine original artwork and presentation
10. Package a playable prototype

## Open Decisions

- Browser or native desktop game
- Fixed sectors versus continuous angular control
- Single ring versus multiple concentric rings
- Exact satirical themes and categories
- Scoring and progression systems
- Art direction
- Sound design
- Single-player or additional modes

## Development Rules

Primary environment: Windows / PowerShell 7
Version control: GitHub

Prefer local development and free tools where practical.
Do not install software without approval.
Do not incur costs without approval.

Keep Project #14 separate from all other projects.
Do not modify Project #13 or Project #15.

## Project Continuity

This repository is the persistent project notebook.

Future sessions should read this README before proceeding.
Distinguish confirmed decisions from proposed features.
Do not claim a playable game exists until it has been built.