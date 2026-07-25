import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, projectTitle, sector, country, objective } = body;

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Return realistic domain-specific structured fallback if API key is not configured
      if (type === "me_framework") {
        return NextResponse.json({
          success: true,
          result: {
            theoryOfChange: `IF technical support and data-driven monitoring tools are deployed for ${projectTitle || "the initiative"} in ${country || "East Africa"}, THEN operational capacity and stakeholder accountability in ${sector || "development"} will increase, LEADING TO sustainable community-level impact.`,
            outcomes: [
              {
                title: "Baseline & Data Collection System Established",
                indicator: "% of target facilities/sites with active mobile ODK/KoboToolbox monitoring systems",
                target: "95% Coverage within 6 months",
                dataCollector: "Field Surveys & Verification Audits"
              },
              {
                title: "Capacity Building & Training Metrics",
                indicator: "Number of staff & community enumerators trained in MERL protocols",
                target: "150+ Certified Practitioners",
                dataCollector: "Pre/Post Training Scorecard & Competency Test"
              },
              {
                title: "Impact & Compliance Assessment",
                indicator: "% alignment with regional regulatory and disability inclusion standards",
                target: "100% Compliance Level",
                dataCollector: "Independent Third-Party Verification"
              }
            ],
            risksAndMitigation: [
              {
                risk: "Field accessibility & logistics constraints in remote counties",
                mitigation: "Deploy localized enumerator networks and offline mobile survey tools"
              },
              {
                risk: "Stakeholder engagement bottlenecks",
                mitigation: "Engage local community leaders and government line managers early"
              }
            ]
          }
        });
      } else {
        return NextResponse.json({
          success: true,
          result: {
            vision: `To establish ${projectTitle || "Organization"} as a premier, resilient, and evidence-driven leader in ${sector || "the sector"} across ${country || "East Africa"}.`,
            mission: `Delivering high-quality, practical, and sustainable solutions through rigorous research, capacity development, and strategic partnerships.`,
            pillars: [
              {
                name: "Pillar 1: Institutional Capacity & Governance Strengthening",
                description: "Optimizing organizational structures, governance oversight, SOPs, and board effectiveness."
              },
              {
                name: "Pillar 2: Evidence-Based Research & Program Execution",
                description: "Leveraging empirical surveys, M&E systems, and disability mainstreaming across all field operations."
              },
              {
                name: "Pillar 3: Strategic Partnerships & Resource Sustainability",
                description: "Expanding collaborative networks with governments, development partners, and civil society."
              }
            ],
            risksAndMitigation: [
              {
                risk: "Economic volatility and funding shifts",
                mitigation: "Diversify technical service offerings and establish long-term framework agreements"
              }
            ]
          }
        });
      }
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `You are a Senior Monitoring & Evaluation (M&E) and Strategic Planning Consultant at Inter-Act Research Associates (IARA), a premier research firm headquartered in Nairobi, Kenya, operating across Kenya, Uganda, Tanzania, and Rwanda.

Generate a comprehensive, professional ${type === "me_framework" ? "M&E Results Framework" : "Strategic Plan Outline"} in JSON format for the following context:
- Project Title: ${projectTitle}
- Sector / Theme: ${sector}
- Target Country / Region: ${country}
- Key Objective: ${objective}

Output MUST strictly be valid JSON without markdown formatting.

For type "me_framework", JSON structure MUST be:
{
  "theoryOfChange": "string description",
  "outcomes": [
    {
      "title": "string",
      "indicator": "string",
      "target": "string",
      "dataCollector": "string"
    }
  ],
  "risksAndMitigation": [
    {
      "risk": "string",
      "mitigation": "string"
    }
  ]
}

For type "strategic_plan", JSON structure MUST be:
{
  "vision": "string",
  "mission": "string",
  "pillars": [
    {
      "name": "string",
      "description": "string"
    }
  ],
  "risksAndMitigation": [
    {
      "risk": "string",
      "mitigation": "string"
    }
  ]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text || "{}";
    const parsed = JSON.parse(text);

    return NextResponse.json({
      success: true,
      result: parsed
    });
  } catch (error: any) {
    console.error("Advisory API Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
