  'use client'
  import { useEffect, useRef } from 'react'
  import * as THREE from 'three'

  // ─── EDIT YOUR INFO ───────────────────────────────────────────────────────────
  const NAME     = 'Your Name'
  const INITIALS = 'YN'
  const ROLE     = 'he / him'
  const LOCATION = 'Mumbai, IN'
  // ─────────────────────────────────────────────────────────────────────────────

  export default function PhysicsBadge() {
    const wrapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const wrap = wrapRef.current
      if (!wrap) return

      // ── Canvas ────────────────────────────────────────────────────────────────
      const canvas = document.createElement('canvas')
      canvas.style.cssText = 'display:block;width:100%;height:100%;'
      wrap.appendChild(canvas)

      let W = wrap.clientWidth  || 600
      let H = wrap.clientHeight || 700

      // ── Renderer ──────────────────────────────────────────────────────────────
      const R = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
      R.setPixelRatio(Math.min(devicePixelRatio, 2))
      R.setSize(W, H)
      R.toneMapping = THREE.ACESFilmicToneMapping
      R.toneMappingExposure = 1.3
      R.setClearColor(0x000000, 0)

      const scene = new THREE.Scene()
      const cam = new THREE.PerspectiveCamera(25, W / H, 0.1, 200)
      cam.position.set(0, 0, 13)

      // ── Lights ────────────────────────────────────────────────────────────────
      scene.add(new THREE.AmbientLight(0xffffff, Math.PI * 0.5))
      ;[
        { p: [0, -1, 5],   i: 8,  c: 0xffffff },
        { p: [-1, -1, 1],  i: 10, c: 0xffffff },
        { p: [1, 1, 1],    i: 10, c: 0xffffff },
        { p: [-10, 0, 14], i: 25, c: 0xffffff },
        { p: [3, 4, 3],    i: 6,  c: 0x8844ff },
        { p: [-3, -2, 4],  i: 5,  c: 0x0088ff },
        { p: [0, 2, 6],    i: 4,  c: 0xffffff },
      ].forEach(({ p, i, c }) => {
        const l = new THREE.PointLight(c, i, 40)
        l.position.set(p[0], p[1], p[2])
        scene.add(l)
      })

      // ── 2D card texture ───────────────────────────────────────────────────────
      function rrect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
        ctx.beginPath()
        ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r)
        ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
        ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r)
        ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y)
        ctx.closePath()
      }
      function hline(ctx: CanvasRenderingContext2D, x1: number, y: number, x2: number, col: string) {
        ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 1
        ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke(); ctx.restore()
      }

      function makeCardTex(): THREE.CanvasTexture {
        const TW = 800, TH = 1120
        const cv = document.createElement('canvas')
        cv.width = TW; cv.height = TH
        const c = cv.getContext('2d')!

        // bg
        c.fillStyle = '#060609'; c.fillRect(0, 0, TW, TH)
        const bgGrad = c.createLinearGradient(0, 0, TW, TH)
        bgGrad.addColorStop(0, 'rgba(60,30,140,0.10)')
        bgGrad.addColorStop(1, 'rgba(10,30,80,0.08)')
        c.fillStyle = bgGrad; c.fillRect(0, 0, TW, TH)

        // border
        c.strokeStyle = 'rgba(255,255,255,0.08)'; c.lineWidth = 1.5
        rrect(c, 2, 2, TW - 4, TH - 4, 22); c.stroke()

        // big bg words
        const words = ['AI/ML', 'SOFTWARE', 'DEVELOPER']
        const szs = [158, 92, 158], wordY = [200, 308, 452]
        function bgt(alpha: number, clipY: number, clipH: number) {
          c.save(); c.globalAlpha = alpha
          const tg = c.createLinearGradient(0, 60, TW, 480)
          tg.addColorStop(0, '#a78bfa'); tg.addColorStop(0.5, '#38bdf8'); tg.addColorStop(1, '#c084fc')
          c.fillStyle = tg
          if (clipH) { c.beginPath(); c.rect(0, clipY, TW, clipH); c.clip() }
          words.forEach((t, i) => {
            c.font = `900 ${szs[i]}px Arial Black,Impact,sans-serif`
            c.textAlign = 'center'; c.fillText(t, TW / 2, wordY[i])
          })
          c.restore()
        }
        bgt(0.035, 0, 0); bgt(0.075, 55, 430); bgt(0.13, 90, 310)

        // punch hole
        c.fillStyle = '#000'; c.beginPath(); c.arc(TW / 2, 26, 16, 0, Math.PI * 2); c.fill()
        c.strokeStyle = 'rgba(255,255,255,0.15)'; c.lineWidth = 1.5
        c.beginPath(); c.arc(TW / 2, 26, 16, 0, Math.PI * 2); c.stroke()

        // header
        c.fillStyle = 'rgba(255,255,255,0.55)'; c.font = '700 20px monospace'; c.textAlign = 'left'
        c.fillText('▲  PORTFOLIO', 36, 42)
        c.fillStyle = 'rgba(255,255,255,0.22)'; c.font = '400 16px monospace'; c.textAlign = 'right'
        c.fillText('2026 · V1.0', TW - 36, 42)
        hline(c, 36, 58, TW - 36, 'rgba(255,255,255,0.06)')

        // globe
        const GX = TW / 2, GY = 290, GR = 130
        const grd = c.createRadialGradient(GX - 35, GY - 35, 8, GX, GY, GR)
        grd.addColorStop(0, '#141830'); grd.addColorStop(0.6, '#080f1e'); grd.addColorStop(1, '#030508')
        c.beginPath(); c.arc(GX, GY, GR, 0, Math.PI * 2); c.fillStyle = grd; c.fill()
        c.save(); c.beginPath(); c.arc(GX, GY, GR, 0, Math.PI * 2); c.clip()
        c.strokeStyle = 'rgba(56,189,248,0.20)'; c.lineWidth = 0.7
        for (let i = 1; i < 6; i++) {
          const fy = GY - GR + (i / 6) * GR * 2
          const rr = Math.sqrt(Math.max(0, GR * GR - (fy - GY) ** 2))
          c.beginPath(); c.ellipse(GX, fy, rr, rr * 0.2, 0, 0, Math.PI * 2); c.stroke()
        }
        for (let i = 0; i < 7; i++) {
          const a = (i / 7) * Math.PI
          c.beginPath(); c.ellipse(GX, GY, GR * Math.sin(a) || 1, GR, (i / 7) * Math.PI, 0, Math.PI * 2); c.stroke()
        }
        c.restore()
        const dots = [[368,238],[424,256],[394,306],[446,296],[356,328],[414,346],[380,266],[454,266],[348,280],[434,326]]
        const edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[6,7],[7,3],[2,9],[8,6],[0,6]]
        c.strokeStyle = 'rgba(56,189,248,0.30)'; c.lineWidth = 0.8
        edges.forEach(([a, b]) => {
          c.beginPath(); c.moveTo(dots[a][0], dots[a][1]); c.lineTo(dots[b][0], dots[b][1]); c.stroke()
        })
        c.fillStyle = 'rgba(100,210,255,0.85)'
        dots.forEach(([x, y]) => { c.beginPath(); c.arc(x, y, 2.2, 0, Math.PI * 2); c.fill() })

        // virtual attendee
        const S1 = 502
        c.fillStyle = 'rgba(255,255,255,0.25)'; c.font = '500 15px monospace'; c.textAlign = 'left'
        c.fillText('VIRTUAL ATTENDEE', 36, S1)
        const pg = c.createLinearGradient(TW - 148, 0, TW - 36, 0)
        pg.addColorStop(0, '#6d28d9'); pg.addColorStop(1, '#0284c7')
        c.fillStyle = pg; rrect(c, TW - 148, S1 - 22, 112, 28, 4); c.fill()
        c.fillStyle = '#fff'; c.font = 'bold 11px monospace'; c.textAlign = 'center'
        c.fillText('ATTENDEE', TW - 92, S1 - 2)
        hline(c, 36, S1 + 14, TW - 36, 'rgba(255,255,255,0.06)')

        // avatar
        const PT = S1 + 32, PIX = 36, PIY = PT, PIS = 80
        c.save()
        c.beginPath(); c.arc(PIX + PIS / 2, PIY + PIS / 2, PIS / 2, 0, Math.PI * 2); c.clip()
        c.fillStyle = '#0f1117'; c.fillRect(PIX, PIY, PIS, PIS)
        c.fillStyle = 'rgba(167,139,250,0.6)'; c.font = 'bold 26px monospace'; c.textAlign = 'center'
        c.fillText(INITIALS, PIX + PIS / 2, PIY + PIS / 2 + 9)
        c.restore()
        c.strokeStyle = 'rgba(109,40,217,0.55)'; c.lineWidth = 1.8
        c.beginPath(); c.arc(PIX + PIS / 2, PIY + PIS / 2, PIS / 2 + 3, 0, Math.PI * 2); c.stroke()

        // name
        const NX = PIX + PIS + 18
        c.fillStyle = '#ffffff'; c.font = 'bold 46px Georgia,serif'; c.textAlign = 'left'
        c.fillText(NAME, NX, PT + 38)
        c.fillStyle = 'rgba(255,255,255,0.32)'; c.font = '18px monospace'
        c.fillText(ROLE, NX + 2, PT + 62)

        // pill
        const ng = c.createLinearGradient(490, 0, 760, 0)
        ng.addColorStop(0, '#6d28d9'); ng.addColorStop(1, '#0284c7')
        c.strokeStyle = ng; c.lineWidth = 1.6; rrect(c, 490, PT + 8, 266, 44, 22); c.stroke()
        const nt = c.createLinearGradient(490, 0, 760, 0)
        nt.addColorStop(0, '#a78bfa'); nt.addColorStop(1, '#38bdf8')
        c.fillStyle = nt; c.font = 'bold 15px monospace'; c.textAlign = 'center'
        c.fillText('NICE TO MEET U!', 623, PT + 35)

        // meta grid
        const MT = PT + 122
        hline(c, 36, MT, TW - 36, 'rgba(255,255,255,0.06)')
        const MY = MT + 26, C2 = 416
        const meta: [string, string, number, number][] = [
          ['ROLE',      'AI/ML Dev',   36, MY],
          ['LOCATION',  LOCATION,      C2, MY],
          ['PRONOUNS',  ROLE,          36, MY + 76],
          ['AVAILABLE', 'For Work ✦',  C2, MY + 76],
        ]
        meta.forEach(([l, v, x, y]) => {
          c.fillStyle = 'rgba(255,255,255,0.28)'; c.font = '500 13px monospace'; c.textAlign = 'left'
          c.fillText(l, x, y)
          c.fillStyle = '#ffffff'; c.font = 'bold 24px Arial,sans-serif'
          c.fillText(v, x, y + 30)
        })

        // footer
        hline(c, 36, 1044, TW - 36, 'rgba(255,255,255,0.06)')
        c.fillStyle = 'rgba(255,255,255,0.18)'; c.font = '13px monospace'; c.textAlign = 'left'
        c.fillText('PORTFOLIO.DEV / SHIP', 36, 1082)
        c.fillStyle = '#22c55e'; c.beginPath(); c.arc(TW - 50, 1078, 6, 0, Math.PI * 2); c.fill()
        c.save(); c.globalAlpha = 0.25; c.fillStyle = '#4ade80'
        c.beginPath(); c.arc(TW - 50, 1078, 11, 0, Math.PI * 2); c.fill(); c.restore()

        return new THREE.CanvasTexture(cv)
      }

      // ── Card mesh ─────────────────────────────────────────────────────────────
      const CW = 1.6, CH = 2.25
      const cardTex = makeCardTex()
      const cardMat = new THREE.MeshPhysicalMaterial({
        map: cardTex,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        roughness: 0.08,
        metalness: 0.25,
        iridescence: 1.0,
        iridescenceIOR: 1.8,
        iridescenceThicknessRange: [200, 1200],
        side: THREE.DoubleSide,
      })
      const cardMesh = new THREE.Mesh(new THREE.PlaneGeometry(CW, CH), cardMat)
      scene.add(cardMesh)

      // ── Lanyard band ──────────────────────────────────────────────────────────
      const SEG = 64, BW = 0.09
      const bVerts = new Float32Array(SEG * 6 * 3)
      const bGeo = new THREE.BufferGeometry()
      bGeo.setAttribute('position', new THREE.BufferAttribute(bVerts, 3))
      const bMat = new THREE.MeshStandardMaterial({
        color: 0x080808, roughness: 0.85, metalness: 0, side: THREE.DoubleSide, depthTest: false,
      })
      const bandMesh = new THREE.Mesh(bGeo, bMat)
      bandMesh.renderOrder = -1
      scene.add(bandMesh)

      // ── D-ring clasp ──────────────────────────────────────────────────────────
      const claspMat = new THREE.MeshStandardMaterial({ color: 0x101010, roughness: 0.18, metalness: 0.98 })
      const claspGroup = new THREE.Group()
      scene.add(claspGroup)

      const ring3 = new THREE.Mesh(new THREE.TorusGeometry(0.088, 0.018, 14, 40, Math.PI), claspMat)
      ring3.rotation.z = Math.PI; ring3.position.set(0, 0.10, 0); claspGroup.add(ring3)
      const bar3 = new THREE.Mesh(new THREE.CylinderGeometry(0.010, 0.010, 0.176, 10), claspMat)
      bar3.rotation.z = Math.PI / 2; claspGroup.add(bar3)
      const barrel3 = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.055, 12), claspMat)
      barrel3.position.set(0, -0.040, 0); claspGroup.add(barrel3)
      const pin3 = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.100, 10), claspMat)
      pin3.rotation.z = Math.PI / 2; pin3.position.set(0, -0.076, 0); claspGroup.add(pin3)

      // ── Verlet rope physics ───────────────────────────────────────────────────
      const G = -30, N = 7, REST = 0.50, AX = 0, AY = 4.4
      const jx  = new Float64Array(N + 1), jy  = new Float64Array(N + 1)
      const jpx = new Float64Array(N + 1), jpy = new Float64Array(N + 1)
      for (let i = 0; i <= N; i++) {
        jx[i] = AX; jy[i] = AY - i * REST; jpx[i] = jx[i]; jpy[i] = jy[i]
      }

      let cx = jx[N], cy = jy[N] - CH * 0.5 - 0.15
      let cpx = cx, cpy = cy
      let cAngY = 0, cAngVY = 0
      let hoverTiltX = 0, hoverTiltY = 0
      let curTiltX = 0, curTiltY = 0
      let prevCx = cx, prevCy = cy, cardSpd = 0
      let dragging = false, dox = 0, doy = 0

      function physics(dt: number) {
        dt = Math.min(dt, 0.025)
        const SUB = 18, sdt = dt / SUB
        for (let s = 0; s < SUB; s++) {
          for (let i = 1; i <= N; i++) {
            const nx = jx[i] + (jx[i] - jpx[i]) * 0.988
            const ny = jy[i] + (jy[i] - jpy[i]) * 0.988 + G * sdt * sdt
            jpx[i] = jx[i]; jpy[i] = jy[i]; jx[i] = nx; jy[i] = ny
          }
          if (!dragging) {
            const nx = cx + (cx - cpx) * 0.988
            const ny = cy + (cy - cpy) * 0.988 + G * sdt * sdt
            cpx = cx; cpy = cy; cx = nx; cy = ny
          }
          for (let p = 0; p < 4; p++) {
            jx[0] = AX; jy[0] = AY
            for (let i = 0; i < N; i++) {
              const dx = jx[i + 1] - jx[i], dy = jy[i + 1] - jy[i]
              const d = Math.sqrt(dx * dx + dy * dy) || 1e-9
              const diff = (d - REST) / d * 0.5
              if (i > 0) { jx[i] += dx * diff; jy[i] += dy * diff }
              jx[i + 1] -= dx * diff; jy[i + 1] -= dy * diff
            }
            const topX = cx, topY = cy + CH * 0.5 + 0.01
            const dx = topX - jx[N], dy = topY - jy[N]
            const d = Math.sqrt(dx * dx + dy * dy) || 1e-9
            if (d > 0.001) {
              if (!dragging) { cx -= dx * 0.5; cy -= dy * 0.5 }
              jx[N] += dx * 0.5; jy[N] += dy * 0.5
            }
          }
          cAngVY += (-cAngY * 0.35) * sdt; cAngVY *= 0.90; cAngY += cAngVY
        }
      }

      function catmull(p0: number, p1: number, p2: number, p3: number, t: number) {
        return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (-p0 + 3 * p1 - 3 * p2 + p3) * t * t * t)
      }

      const cpX = new Float64Array(N + 3), cpY2 = new Float64Array(N + 3)

      function updateBand() {
        cpX[0] = AX; cpY2[0] = AY
        for (let i = 0; i <= N; i++) { cpX[i + 1] = jx[i]; cpY2[i + 1] = jy[i] }
        cpX[N + 2] = cx; cpY2[N + 2] = cy + CH * 0.5 + 0.01
        const np = N + 3

        const sx = new Float64Array(SEG + 1), sy = new Float64Array(SEG + 1)
        for (let s = 0; s <= SEG; s++) {
          const t = s / SEG, fi = t * (np - 1)
          const i1 = Math.min(np - 1, Math.max(0, Math.floor(fi)))
          const i0 = Math.max(0, i1 - 1), i2 = Math.min(np - 1, i1 + 1), i3 = Math.min(np - 1, i2 + 1)
          const lt = fi - Math.floor(fi)
          sx[s] = catmull(cpX[i0], cpX[i1], cpX[i2], cpX[i3], lt)
          sy[s] = catmull(cpY2[i0], cpY2[i1], cpY2[i2], cpY2[i3], lt)
        }

        let vi = 0
        for (let s = 0; s < SEG; s++) {
          const tx  = sx[s + 1] - sx[s],   ty  = sy[s + 1] - sy[s]
          const tl  = Math.sqrt(tx * tx + ty * ty) || 1e-9
          const nx0 = -ty / tl, ny0 = tx / tl          // unit normal at s

          const tx2 = s + 2 <= SEG ? sx[s + 2] - sx[s + 1] : tx
          const ty2 = s + 2 <= SEG ? sy[s + 2] - sy[s + 1] : ty
          const tl2 = Math.sqrt(tx2 * tx2 + ty2 * ty2) || 1e-9
          const nx1 = -ty2 / tl2, ny1 = tx2 / tl2      // unit normal at s+1

          // four corners of the quad
          const ax = sx[s]   - nx0 * BW, ay = sy[s]   - ny0 * BW
          const bx = sx[s]   + nx0 * BW, by = sy[s]   + ny0 * BW
          const cx2 = sx[s+1] - nx1 * BW, cy2 = sy[s+1] - ny1 * BW
          const dx2 = sx[s+1] + nx1 * BW, dy2 = sy[s+1] + ny1 * BW

          bVerts[vi++] = ax;  bVerts[vi++] = ay;  bVerts[vi++] = 0.01
          bVerts[vi++] = bx;  bVerts[vi++] = by;  bVerts[vi++] = 0.01
          bVerts[vi++] = cx2; bVerts[vi++] = cy2; bVerts[vi++] = 0.01
          bVerts[vi++] = bx;  bVerts[vi++] = by;  bVerts[vi++] = 0.01
          bVerts[vi++] = dx2; bVerts[vi++] = dy2; bVerts[vi++] = 0.01
          bVerts[vi++] = cx2; bVerts[vi++] = cy2; bVerts[vi++] = 0.01
        }
        bGeo.attributes.position.needsUpdate = true
        bGeo.computeVertexNormals()

        claspGroup.position.set(jx[N], jy[N], 0.02)
        claspGroup.rotation.y = cAngY
        claspGroup.rotation.x = curTiltX * 0.5
      }

      function updateIridescence() {
        const ddx = cx - prevCx, ddy = cy - prevCy
        const spd = Math.sqrt(ddx * ddx + ddy * ddy) * 60
        cardSpd += (spd - cardSpd) * 0.12
        const t = Math.min(cardSpd / 4, 1)
        cardMat.iridescence = 0.4 + t * 0.6
        cardMat.iridescenceThicknessRange = [150 + t * 250, 900 + t * 1800]
        cardMat.clearcoatRoughness = 0.04 + (1 - t) * 0.12
        prevCx = cx; prevCy = cy
      }

      // ── Pointer → world ───────────────────────────────────────────────────────
      function to3D(ex: number, ey: number) {
        const rect = canvas.getBoundingClientRect()
        const nx = ((ex - rect.left) / rect.width) * 2 - 1
        const ny = -((ey - rect.top)  / rect.height) * 2 + 1
        const v = new THREE.Vector3(nx, ny, 0.5).unproject(cam)
        const d = v.sub(cam.position).normalize()
        const t = -cam.position.z / d.z
        return { x: cam.position.x + d.x * t, y: cam.position.y + d.y * t }
      }

      // ── Pointer events ────────────────────────────────────────────────────────
      function onMove(e: PointerEvent) {
        const w = to3D(e.clientX, e.clientY)
        const over = Math.abs(w.x - cx) < CW * 0.9 && Math.abs(w.y - cy) < CH * 0.9
        if (over && !dragging) {
          hoverTiltX = -((w.y - cy) / CH) * 0.35
          hoverTiltY =  ((w.x - cx) / CW) * 0.35
        } else if (!dragging) {
          hoverTiltX = 0; hoverTiltY = 0
        }
        if (dragging) {
          cx = w.x + dox; cy = w.y + doy; cpx = cx; cpy = cy
          for (let i = 1; i <= N; i++) { jpx[i] = jx[i]; jpy[i] = jy[i] }
        }
        canvas.style.cursor = over ? (dragging ? 'grabbing' : 'grab') : 'default'
      }

      function onDown(e: PointerEvent) {
        const w = to3D(e.clientX, e.clientY)
        if (Math.abs(w.x - cx) < CW * 0.9 && Math.abs(w.y - cy) < CH * 0.9) {
          dragging = true; dox = cx - w.x; doy = cy - w.y
          canvas.setPointerCapture(e.pointerId)
          canvas.style.cursor = 'grabbing'
          hoverTiltX = 0; hoverTiltY = 0
        }
      }

      function onUp()    { dragging = false }
      function onLeave() { hoverTiltX = 0; hoverTiltY = 0 }

      canvas.addEventListener('pointermove',  onMove)
      canvas.addEventListener('pointerdown',  onDown)
      canvas.addEventListener('pointerup',    onUp)
      canvas.addEventListener('pointerleave', onLeave)

      // ── ResizeObserver (tracks wrapper, not window) ───────────────────────────
      const ro = new ResizeObserver(() => {
        W = wrap.clientWidth; H = wrap.clientHeight
        cam.aspect = W / H; cam.updateProjectionMatrix()
        R.setSize(W, H)
      })
      ro.observe(wrap)

      // ── Render loop ───────────────────────────────────────────────────────────
      let prev = performance.now()
      let rafId = 0

      function loop(now: number) {
        rafId = requestAnimationFrame(loop)
        const dt = Math.min((now - prev) / 1000, 0.05); prev = now

        physics(dt)
        updateBand()
        updateIridescence()

        curTiltX += (hoverTiltX - curTiltX) * 0.08
        curTiltY += (hoverTiltY - curTiltY) * 0.08

        cardMesh.position.set(cx, cy, 0)
        cardMesh.rotation.set(curTiltX, cAngY + curTiltY, 0)

        R.render(scene, cam)
      }
      rafId = requestAnimationFrame(loop)

      // ── Cleanup on unmount ────────────────────────────────────────────────────
      return () => {
        cancelAnimationFrame(rafId)
        ro.disconnect()
        canvas.removeEventListener('pointermove',  onMove)
        canvas.removeEventListener('pointerdown',  onDown)
        canvas.removeEventListener('pointerup',    onUp)
        canvas.removeEventListener('pointerleave', onLeave)
        R.dispose()
        cardTex.dispose()
        cardMat.dispose()
        bGeo.dispose()
        bMat.dispose()
        claspMat.dispose()
        if (wrap.contains(canvas)) wrap.removeChild(canvas)
      }
    }, [])

    return (
      <div ref={wrapRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
        <p style={{
          position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
          fontSize: 9, color: '#2a2a2a', letterSpacing: '0.12em',
          textTransform: 'uppercase', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 1,
        }}>
          drag the badge ↑
        </p>
      </div>
    )
  }