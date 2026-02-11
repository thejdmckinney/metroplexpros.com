-- Create leads table for calculator and download lead capture
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  address TEXT,
  source TEXT NOT NULL,
  calculator_inputs JSONB,
  estimated_cost_low INTEGER,
  estimated_cost_high INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Create index on source for analytics
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source);

-- Create index on created_at for time-based queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Add RLS (Row Level Security) policies
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow service role to do everything
CREATE POLICY "Service role can do everything" 
  ON leads
  FOR ALL 
  USING (auth.role() = 'service_role');
