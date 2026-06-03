type SelectionItem = {
  id: string
  label: string
  image: string
}

type Props = {
  title: string
  options: SelectionItem[]
  onClose: () => void
  onSelect: (value: SelectionItem) => void
}

export default function SelectionModal({
  title,
  options,
  onClose,
  onSelect
}: Props) {
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <h3>{title}</h3>

        <div className="selectionGrid">
          {options.map((option) => (
            <div
              key={option.id}
              className="selectionOption"
              onClick={() => {
                onSelect(option)
                onClose()
              }}
            >
              <img
                src={option.image}
                alt={option.label}
                className="selectionImage"
              />

              <span  className="selectionLabel">{option.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}