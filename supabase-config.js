/*
 * supabase-config.js — Configuración de Supabase para sincronización de gastos
 * ─────────────────────────────────────────────────────────────────────────────
 * SETUP (solo una vez):
 *
 * 1. Crear cuenta gratuita en https://supabase.com
 * 2. Crear un nuevo proyecto (elige una región cercana, ej. South America)
 * 3. Una vez creado, ir a: Settings → API
 * 4. Copiar "Project URL" y "anon public" key y pegarlos abajo
 * 5. Ir a SQL Editor y ejecutar el siguiente script para crear la tabla:
 *
 *    CREATE TABLE gastos (
 *      id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
 *      fecha       date NOT NULL,
 *      categoria   text NOT NULL,
 *      descripcion text NOT NULL DEFAULT '',
 *      proveedor   text NOT NULL DEFAULT '',
 *      monto       integer NOT NULL,
 *      trabajador  text NOT NULL DEFAULT '',
 *      created_at  timestamptz DEFAULT now()
 *    );
 *
 *    ALTER TABLE gastos ENABLE ROW LEVEL SECURITY;
 *
 *    -- Trabajadores pueden insertar
 *    CREATE POLICY "insert_gastos" ON gastos FOR INSERT WITH CHECK (true);
 *    -- Dashboard puede leer todo
 *    CREATE POLICY "select_gastos" ON gastos FOR SELECT USING (true);
 *    -- Solo desde dashboard se puede eliminar (requiere service key — no expuesto)
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

window.SUPABASE_URL  = 'https://TU-PROYECTO.supabase.co';  // ← reemplazar
window.SUPABASE_ANON = 'eyJ...tu-anon-key-aqui...';        // ← reemplazar
