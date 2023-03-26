def cigar_party(cigars, is_weekend):
  return (is_weekend and cigars >= 40) or 40 <= cigars <= 60
