export default function Skillcard({ name }) {
    return (
      <div className="bg-black/50 border border-white/20 rounded-lg p-4 hover:border-white/40 hover:shadow-lg hover:shadow-white/5 transition-all duration-300 flex items-center justify-center">
        <span className="text-center font-medium">{name}</span>
      </div>
    )
  }
  
  