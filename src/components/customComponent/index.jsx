import React from 'react'
import { useFormikContext, getIn } from 'formik'
import DatePicker from 'react-datepicker'
import Select from 'react-select'

export const CustomInput = ({ field, form: { touched, errors }, ...props }) => {
	const touch = getIn(touched, field.name)
	const error = getIn(errors, field.name)

	return (
		<div className={props.styleData + ' '} style={props.style}>
			{!props.withOutLabel && (
				<span className="custom-label">
					{props.label}{' '}
					{props.requiredField && (
						<span className="mendatory_sign">*</span>
					)}
				</span>
			)}
			<input
				className={'form-control ' + (error && touch && 'is-invalid')}
				{...field}
				{...props}
			/>
			{error && touch && <div className="invalid-feedback">{error}</div>}
		</div>
	)
}

export const CustomTextArea = ({
	field,
	form: { touched, errors },
	...props
}) => {
	const touch = getIn(touched, field.name)
	const error = getIn(errors, field.name)

	return (
		<div className={props.styleData + ' '} style={props.style}>
			{!props.withOutLabel && (
				<span className="custom-label">
					{props.label}{' '}
					{props.requiredField && (
						<span className="mendatory_sign">*</span>
					)}
				</span>
			)}
			<textarea
				className={'form-control ' + (error && touch && 'is-invalid')}
				{...field}
				{...props}
			></textarea>
			{error && touch && <div className="invalid-feedback">{error}</div>}
		</div>
	)
}

export const CustomDropdown = ({
	field,
	form: { touched, errors },
	...props
}) => {
	const touch = getIn(touched, field.name)
	const error = getIn(errors, field.name)
	const { setFieldValue } = useFormikContext()

	return (
		<React.Fragment>
			<div className={props.styleData + ' '} style={props.style}>
				{!props.withOutLabel && (
					<span className="custom-label">
						{props.label}{' '}
						{props.requiredField && (
							<span className="mendatory_sign">*</span>
						)}
					</span>
				)}

				<select
					className={
						'form-select custom-select ' +
						(error && touch && 'is-invalid')
					}
					{...field}
					{...props}
					onChange={(e) => {
						// //console.log("e--------->", e);
						field.onChange(e)
						if (props.handleChange) {
							props.handleChange(e)
						}
					}}
				>
					<option value="Select">Select...</option>
					{props.data &&
						props.data.map((i, idx) => (
							<option key={idx} value={i.value}>
								{i.label}
							</option>
						))}
				</select>
				{error && touch && (
					<div className="invalid-feedback">{error}</div>
				)}
			</div>
		</React.Fragment>
	)
}

export const CustomReactSelect = ({
	field,
	options,
	isMulti = false,
	form: { touched, errors },
	...props
}) => {
	const touch = getIn(touched, field.name)
	const error = getIn(errors, field.name)
	const { setFieldValue } = useFormikContext()
	const onChange = (option) => {
		setFieldValue(
			field.name,
			isMulti ? option.map((item) => item.value) : option.value,
		)
	}

	const getValue = () => {
		if (options) {
			return isMulti
				? options.filter(
						(option) => field.value.indexOf(option.value) >= 0,
				  )
				: options.find((option) => option.value === field.value)
		} else {
			return isMulti ? [] : ''
		}
	}

	return (
		<React.Fragment>
			<div className={props.styleData + ' '} style={props.style}>
				{!props.withOutLabel && (
					<span className="custom-label">
						{props.label}{' '}
						{props.requiredField && (
							<span className="mendatory_sign">*</span>
						)}
					</span>
				)}
				<Select
					className={' ' + (error && touch && 'is-invalid')}
					name={field.name}
					value={getValue()}
					onChange={onChange}
					placeholder={props.placeholder}
					options={options}
					isMulti={isMulti}
				/>
				{error && touch && (
					<div className="invalid-feedback">{error}</div>
				)}
			</div>
		</React.Fragment>
	)
}

export const CustomRadioButton = ({
	field,
	form: { touched, errors },
	...props
}) => {
	const touch = getIn(touched, field.name)
	const error = getIn(errors, field.name)

	const { setFieldValue } = useFormikContext()
	return (
		<React.Fragment>
			<div className={props.styleData + ' '} style={props.style}>
				{!props.withOutLabel && (
					<span className="custom-label">
						{props.label}{' '}
						{props.requiredField && (
							<span className="mendatory_sign">*</span>
						)}
					</span>
				)}
				<div class="d-flex space-x-10 switch_item">
					<input
						className={' ' + (error && touch && 'is-invalid')}
						id={props.label}
						{...field}
						{...props}
						checked={props.val}
						onChange={(e) => {
							setFieldValue(field.name, !props.val)
						}}
					/>
					<label className="" htmlFor={props.label} />
				</div>

				{error && touch && (
					<div className="invalid-feedback">{error}</div>
				)}
			</div>
		</React.Fragment>
	)
}

export const CustomCheckbox = ({
	field,
	form: { touched, errors },
	...props
}) => {
	const touch = getIn(touched, field.name)
	const error = getIn(errors, field.name)

	const { setFieldValue } = useFormikContext()
	return (
		<React.Fragment>
			<div className="custom-control custom-checkbox d-inline-block">
				<input
					id={props.name}
					type="checkbox"
					// className="custom-control-input"
					checked={props.val}
					onChange={(e) => {
						setFieldValue(field.name, !props.val)
					}}
				/>
				<label className="" htmlFor={props.name} />
			</div>
			{error && touch && <div className="invalid-feedback">{error}</div>}
		</React.Fragment>
	)
}

export const CustomDateInputLog = ({
	field,
	form: { touched, errors },
	...props
}) => {
	const { setFieldValue } = useFormikContext()
	const touch = getIn(touched, field.name)
	const error = getIn(errors, field.name)
	return (
		<div className="col-md-3 form-group">
			<label htmlFor className="small text-secondary fw-600">
				{props.label}
			</label>
			<div className="input-group mb-0">
				<DatePicker
					dateFormat={handleDatePicker()}
					autoComplete="off"
					className={
						'form-control shadow-none ' +
						(error && touch && 'is-invalid')
					}
					{...field}
					{...props}
					selected={(field.value && new Date(field.value)) || null}
					onChange={(val) => setFieldValue(field.name, val)}
				/>
			</div>
			{error && touch && <div className="error-message">{error}</div>}
		</div>
	)
}

export const handleDatePicker = () => {
	return 'dd/MM/yyyy'
}
