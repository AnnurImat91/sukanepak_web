import { NextRequest, NextResponse } from "next/server"

const endpoint = `${process.env.SUPABASE_URL}/rest/v1/documentation_entries`
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY

function headers() {
  return { apikey: serviceKey ?? "", Authorization: `Bearer ${serviceKey ?? ""}`, "Content-Type": "application/json" }
}

function adminAuthorized(request: NextRequest) {
  const configuredKey = process.env.ADMIN_PANEL_KEY
  return Boolean(configuredKey && request.headers.get("x-admin-key") === configuredKey)
}

export async function GET(request: NextRequest) {
  const params = new URLSearchParams({ select: "id,title,event_date,schedule,drive_url,media_count,published,created_at,updated_at", published: "eq.true", order: "event_date.desc" })
  const response = await fetch(`${endpoint}?${params}`, { headers: headers(), cache: "no-store" })
  const data = await response.json()
  return NextResponse.json(data, { status: response.status })
}

export async function POST(request: NextRequest) {
  if (!adminAuthorized(request)) return NextResponse.json({ error: "Admin key required" }, { status: 401 })
  const body = await request.json()
  const response = await fetch(endpoint, { method: "POST", headers: { ...headers(), Prefer: "return=representation" }, body: JSON.stringify(body) })
  return NextResponse.json(await response.json(), { status: response.status })
}

export async function PATCH(request: NextRequest) {
  if (!adminAuthorized(request)) return NextResponse.json({ error: "Admin key required" }, { status: 401 })
  const { id, ...changes } = await request.json()
  if (!id) return NextResponse.json({ error: "id is required" }, { status: 400 })
  const response = await fetch(`${endpoint}?id=eq.${encodeURIComponent(id)}`, { method: "PATCH", headers: { ...headers(), Prefer: "return=representation" }, body: JSON.stringify(changes) })
  return NextResponse.json(await response.json(), { status: response.status })
}

export async function DELETE(request: NextRequest) {
  if (!adminAuthorized(request)) return NextResponse.json({ error: "Admin key required" }, { status: 401 })
  const id = request.nextUrl.searchParams.get("id")
  if (!id) return NextResponse.json({ error: "id is required" }, { status: 400 })
  const response = await fetch(`${endpoint}?id=eq.${encodeURIComponent(id)}`, { method: "DELETE", headers: { ...headers(), Prefer: "return=representation" } })
  return NextResponse.json(await response.json(), { status: response.status })
}
