import { NextRequest, NextResponse } from 'next/server';

/**
 * GET API endpoint for health check.
 *
 * 이 API는 서버가 정상적으로 동작하는지 확인(ping)하기 위한 용도로 사용됩니다.
 *
 * @returns {NextResponse} 'ping' 문자열과 함께 200 상태 코드를 반환합니다.
 * @throws {NextResponse} 요청이 잘못된 경우 400 상태 코드와 에러 메시지를 반환합니다.
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    return NextResponse.json('ping', { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
