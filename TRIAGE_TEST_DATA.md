# TriageX Test Data Guide

This guide shows what data inputs will trigger different triage levels (Green, Yellow, Orange, Red).

## How Triage Levels Work

The system calculates a **risk score** (0.0 - 1.0) based on:

- **Vital Signs**: Temperature, Heart Rate, SpO₂
- **Symptom Keywords**: Severity words in symptom description
- **Randomness**: ±0.1 for demo purposes

### Risk Score → Triage Level Mapping:

- **Risk < 0.3** → 🟢 **Self-Care** (Green)
- **Risk 0.3 - 0.6** → 🟡 **Primary Care** (Yellow)
- **Risk 0.6 - 0.8** → 🟠 **Semi-Emergency** (Orange)
- **Risk ≥ 0.8** → 🔴 **Emergency** (Red)

---

## 🟢 Green (Self-Care) - Risk < 0.3

**What you need:** Normal vitals + mild symptoms

### Example Inputs:

**Example 1: Mild Cold**

- **Symptom:** "Slight runny nose and mild headache"
- **Temperature:** 36.8°C (normal)
- **Heart Rate:** 75 bpm (normal)
- **SpO₂:** 98% (normal)
- **Blood Pressure:** 120/80 (optional)

**Example 2: Minor Ache**

- **Symptom:** "Mild muscle ache after exercise"
- **Temperature:** 37.0°C
- **Heart Rate:** 80 bpm
- **SpO₂:** 97%
- **Blood Pressure:** 118/75

**Example 3: Slight Discomfort**

- **Symptom:** "Minor stomach discomfort"
- **Temperature:** 36.5°C
- **Heart Rate:** 70 bpm
- **SpO₂:** 99%

---

## 🟡 Yellow (Primary Care) - Risk 0.3 - 0.6

**What you need:** Slightly abnormal vitals OR moderate symptoms

### Example Inputs:

**Example 1: Moderate Symptoms**

- **Symptom:** "Moderate headache that's been persistent for 2 days"
- **Temperature:** 37.2°C (slightly elevated)
- **Heart Rate:** 95 bpm (normal-high)
- **SpO₂:** 96% (slightly low)
- **Blood Pressure:** 125/85

**Example 2: Worsening Condition**

- **Symptom:** "Cough that's been worsening over the week"
- **Temperature:** 37.5°C (borderline)
- **Heart Rate:** 105 bpm (slightly high)
- **SpO₂:** 94% (low)
- **Blood Pressure:** 130/90

**Example 3: Persistent Symptoms**

- **Symptom:** "Persistent fatigue and mild chest discomfort"
- **Temperature:** 36.2°C (slightly low)
- **Heart Rate:** 55 bpm (slightly low)
- **SpO₂:** 95% (borderline)

---

## 🟠 Orange (Semi-Emergency) - Risk 0.6 - 0.8

**What you need:** Abnormal vitals OR severe symptoms

### Example Inputs:

**Example 1: High Fever + Severe Symptoms**

- **Symptom:** "Severe headache with intense pain and fever"
- **Temperature:** 39.0°C (high fever)
- **Heart Rate:** 110 bpm (elevated)
- **SpO₂:** 93% (low)
- **Blood Pressure:** 140/95

**Example 2: Low SpO₂ + Severe Symptoms**

- **Symptom:** "Unbearable chest pain and difficulty breathing"
- **Temperature:** 38.0°C (fever)
- **Heart Rate:** 125 bpm (high)
- **SpO₂:** 91% (very low - adds 0.5 risk!)
- **Blood Pressure:** 150/100

**Example 3: Abnormal Vitals + Severe Keywords**

- **Symptom:** "Sharp abdominal pain that's intense"
- **Temperature:** 38.5°C (high)
- **Heart Rate:** 45 bpm (very low)
- **SpO₂:** 92% (low)
- **Blood Pressure:** 135/90

---

## 🔴 Red (Emergency) - Risk ≥ 0.8

**What you need:** Critical vitals OR very severe symptoms (or combination)

### Example Inputs:

**Example 1: Critical SpO₂ (Most Reliable)**

- **Symptom:** "Severe difficulty breathing, crushing chest pain"
- **Temperature:** 38.5°C (or higher - adds 0.3 risk)
- **Heart Rate:** 130 bpm (adds 0.3 risk)
- **SpO₂:** 88% (CRITICAL - adds 0.5 risk!)
- **Blood Pressure:** 160/110

**Risk Calculation:**

- Temperature 38.5°C: +0.3
- Heart Rate 130 bpm: +0.3
- SpO₂ 88%: +0.5
- Symptoms ("severe", "crushing"): +0.3
- **Total: 1.4** → Clamped to 1.0 → **Emergency** 🔴

**Example 2: Multiple Critical Vitals**

- **Symptom:** "Unbearable pain, intense headache, sharp chest pain"
- **Temperature:** 40.0°C (very high)
- **Heart Rate:** 45 bpm (very low) OR 140 bpm (very high)
- **SpO₂:** 89% (critical)
- **Blood Pressure:** 170/120

**Example 3: Extreme Temperature + Severe Symptoms**

- **Symptom:** "Crushing chest pain, severe shortness of breath"
- **Temperature:** 41.0°C (dangerous) OR 35.0°C (hypothermia)
- **Heart Rate:** 150 bpm (very high)
- **SpO₂:** 87% (critical)
- **Blood Pressure:** 180/120

---

## Quick Reference: Vital Sign Ranges

### Temperature (°C)

- **Normal:** 36.5 - 37.5°C
- **Slightly Abnormal:** < 36.5 or > 37.5°C (+0.15 risk)
- **Abnormal:** < 36.0 or > 38.5°C (+0.3 risk)

### Heart Rate (bpm)

- **Normal:** 60 - 100 bpm
- **Slightly Abnormal:** < 60 or > 100 bpm (+0.15 risk)
- **Abnormal:** < 50 or > 120 bpm (+0.3 risk)

### SpO₂ (%)

- **Normal:** 95 - 100%
- **Low:** < 95% (+0.2 risk)
- **Critical:** < 90% (+0.5 risk) ⚠️ **HIGHEST RISK FACTOR**

### Symptom Keywords

- **High Risk:** "severe", "intense", "unbearable", "crushing", "sharp" (+0.3 risk)
- **Medium Risk:** "moderate", "persistent", "worsening" (+0.15 risk)

---

## Tips for Testing

1. **To see Green:** Use normal vitals (36.5-37.5°C, 60-100 bpm, 95-100% SpO₂) + mild symptom descriptions
2. **To see Yellow:** Use slightly abnormal vitals OR include "moderate" or "persistent" in symptoms
3. **To see Orange:** Use abnormal vitals (fever, high HR) OR include "severe" keywords
4. **To see Red:** Use **SpO₂ < 90%** (most reliable) OR combine multiple critical vitals + severe keywords

---

## Most Reliable Test Cases

### 🟢 Green (Easiest):

```
Symptom: "Mild headache"
Temperature: 36.8
Heart Rate: 75
SpO₂: 98
```

### 🔴 Red (Easiest):

```
Symptom: "Severe chest pain, crushing sensation"
Temperature: 38.5
Heart Rate: 130
SpO₂: 88  ← This alone adds 0.5 risk!
```

---

**Note:** The system adds ±0.1 randomness for demo purposes, so exact same inputs might vary slightly.
