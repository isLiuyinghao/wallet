import { NextRequest, NextResponse } from 'next/server';
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const valid = await publicClient.verifyMessage({
      address: body.address,
      message: "test message for WTF-DApp demo",
      signature: body.signature,
    });
    return NextResponse.json({ data: valid }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
